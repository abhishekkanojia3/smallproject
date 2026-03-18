# AWS STS Role Configuration Guide

## Overview
This deployment now uses AWS STS (Security Token Service) with IAM roles instead of hardcoded credentials:
- **GitHub Actions**: Uses OIDC provider to assume an IAM role (no stored secrets)
- **Lambda**: Uses IAM execution role to fetch secrets from AWS Secrets Manager

---

## Part 1: GitHub Actions - OIDC Configuration

### Step 1: Create OIDC Identity Provider in AWS

```bash
# Create OIDC provider for GitHub (one-time setup)
aws iam create-open-id-connect-provider \
  --url https://token.actions.githubusercontent.com \
  --client-id-list sts.amazonaws.com \
  --thumbprint-list 6938fd4d98bab03faadb97b34396831e3780aea1
```

**Note:** Replace `6938fd4d98bab03faadb97b34396831e3780aea1` with the current GitHub OIDC thumbprint (see: https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect)

### Step 2: Create IAM Role for GitHub Actions

Create trust policy file `github-actions-trust-policy.json`:
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Federated": "arn:aws:iam::YOUR_AWS_ACCOUNT_ID:oidc-provider/token.actions.githubusercontent.com"
      },
      "Action": "sts:AssumeRoleWithWebIdentity",
      "Condition": {
        "StringEquals": {
          "token.actions.githubusercontent.com:aud": "sts.amazonaws.com"
        },
        "StringLike": {
          "token.actions.githubusercontent.com:sub": "repo:YOUR_GITHUB_ORG/techrunniti.com:ref:refs/heads/dev"
        }
      }
    }
  ]
}
```

Create the role:
```bash
aws iam create-role \
  --role-name TechRunniti-GithubActions-Deploy \
  --assume-role-policy-document file://github-actions-trust-policy.json
```

### Step 3: Attach S3 and CloudFront Permissions

Create policy file `github-actions-policy.json`:
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:ListBucket",
        "s3:GetObject",
        "s3:PutObject",
        "s3:DeleteObject"
      ],
      "Resource": [
        "arn:aws:s3:::techrunniti.com/*",
        "arn:aws:s3:::techrunniti.com"
      ]
    },
    {
      "Effect": "Allow",
      "Action": [
        "cloudfront:CreateInvalidation",
        "cloudfront:GetInvalidation",
        "cloudfront:ListInvalidations"
      ],
      "Resource": "arn:aws:cloudfront::YOUR_AWS_ACCOUNT_ID:distribution/YOUR_DISTRIBUTION_ID"
    }
  ]
}
```

Attach the policy:
```bash
aws iam put-role-policy \
  --role-name TechRunniti-GithubActions-Deploy \
  --policy-name S3CloudFrontAccess \
  --policy-document file://github-actions-policy.json
```

### Step 4: Add GitHub Secret

Add this secret to your GitHub repo (Settings → Secrets → New repository secret):
- **Name:** `AWS_ROLE_ARN`
- **Value:** `arn:aws:iam::YOUR_AWS_ACCOUNT_ID:role/TechRunniti-GithubActions-Deploy`

**Remove these secrets** (no longer needed):
- `AWS_ACCESS_KEY_ID` ❌ Delete
- `AWS_SECRET_ACCESS_KEY` ❌ Delete

---

## Part 2: Lambda - IAM Execution Role

### Step 1: Create Lambda Execution Role

```bash
aws iam create-role \
  --role-name TechRunniti-Lambda-Execution \
  --assume-role-policy-document '{
    "Version": "2012-10-17",
    "Statement": [
      {
        "Effect": "Allow",
        "Principal": {
          "Service": "lambda.amazonaws.com"
        },
        "Action": "sts:AssumeRole"
      }
    ]
  }'
```

### Step 2: Attach Secrets Manager Policy

```bash
aws iam put-role-policy \
  --role-name TechRunniti-Lambda-Execution \
  --policy-name SecretsManagerAccess \
  --policy-document '{
    "Version": "2012-10-17",
    "Statement": [
      {
        "Effect": "Allow",
        "Action": [
          "secretsmanager:GetSecretValue"
        ],
        "Resource": "arn:aws:secretsmanager:*:YOUR_AWS_ACCOUNT_ID:secret:techrunniti/recaptcha-secret*"
      },
      {
        "Effect": "Allow",
        "Action": [
          "logs:CreateLogGroup",
          "logs:CreateLogStream",
          "logs:PutLogEvents"
        ],
        "Resource": "arn:aws:logs:*:YOUR_AWS_ACCOUNT_ID:*"
      }
    ]
  }'
```

### Step 3: Create reCAPTCHA Secret in Secrets Manager

```bash
aws secretsmanager create-secret \
  --name techrunniti/recaptcha-secret \
  --secret-string 'YOUR_RECAPTCHA_SECRET_KEY' \
  --region ap-south-1
```

### Step 4: Update Lambda Configuration

Update your Lambda function to use this execution role:
```bash
aws lambda update-function-configuration \
  --function-name techrunniti-contact \
  --role arn:aws:iam::YOUR_AWS_ACCOUNT_ID:role/TechRunniti-Lambda-Execution
```

### Step 5: Update Lambda Dependencies

Add AWS SDK to Lambda:
```bash
npm install @aws-sdk/client-secrets-manager
```

Or update your Lambda deployment package to include it.

---

## Step 6: Update .env.example

Remove hardcoded secret references:
```env
# REMOVED - Now fetched from AWS Secrets Manager
# RECAPTCHA_SECRET=...

# Keep this for Lambda function
ALLOWED_ORIGINS=https://techrunniti.com,https://www.techrunniti.com
```

---

## Verification

### Test GitHub Actions Workflow
1. Push to `dev` branch
2. Check GitHub Actions workflow logs
3. Verify no `AWS_ACCESS_KEY_ID` or `AWS_SECRET_ACCESS_KEY` are used

### Test Lambda Function
1. Create a test event in Lambda console
2. Verify it retrieves reCAPTCHA secret from Secrets Manager
3. Check CloudWatch logs for successful execution

---

## Security Benefits

✅ **No hardcoded credentials** stored in secrets  
✅ **Time-limited tokens** (STS credentials auto-expire)  
✅ **Fine-grained permissions** per role  
✅ **Audit trail** via CloudTrail  
✅ **Key rotation** handled automatically  
✅ **Least privilege** - each role has minimal permissions needed

---

## Troubleshooting

### GitHub Actions fails with "Failed to assume role"
- Verify OIDC provider is created
- Check trust policy includes correct GitHub repo path
- Ensure `AWS_ROLE_ARN` secret is set correctly

### Lambda fails to fetch reCAPTCHA secret
- Verify IAM execution role has `secretsmanager:GetSecretValue` permission
- Check secret name is exactly `techrunniti/recaptcha-secret`
- Verify secret exists in the same region as Lambda

### Permission denied errors
- Use IAM policy simulator: https://policysim.aws.amazon.com
- Add CloudTrail logging to debug permission issues
