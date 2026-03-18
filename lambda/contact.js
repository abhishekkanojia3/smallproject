const https = require('https');
const { URLSearchParams } = require('url');
const { SecretsManagerClient, GetSecretValueCommand } = require('@aws-sdk/client-secrets-manager');

const secretsClient = new SecretsManagerClient({ region: process.env.AWS_REGION || 'ap-south-1' });
let recaptchaSecretCache = null;
let cacheExpiry = 0;

/**
 * Fetch reCAPTCHA secret from AWS Secrets Manager with caching
 */
async function getRecaptchaSecret() {
  const now = Date.now();
  if (recaptchaSecretCache && cacheExpiry > now) {
    return recaptchaSecretCache;
  }

  try {
    const command = new GetSecretValueCommand({
      SecretId: 'techrunniti/recaptcha-secret',
    });
    const response = await secretsClient.send(command);
    recaptchaSecretCache = response.SecretString;
    cacheExpiry = now + 3600000; // Cache for 1 hour
    return recaptchaSecretCache;
  } catch (error) {
    console.warn('Failed to fetch reCAPTCHA secret from Secrets Manager:', error.message);
    return null; // reCAPTCHA is optional
  }
}

exports.handler = async (event) => {
  const allowedOrigins = (process.env.ALLOWED_ORIGINS || 'https://techrunniti.com,https://www.techrunniti.com')
    .split(',')
    .map((o) => o.trim())
    .filter(Boolean);

  const requestOrigin =
    (event && event.headers && (event.headers.origin || event.headers.Origin)) || '';
  const allowOrigin = allowedOrigins.includes(requestOrigin) ? requestOrigin : allowedOrigins[0];

  const corsHeaders = {
    'Access-Control-Allow-Origin': allowOrigin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    'Content-Type': 'application/json',
  };

  try {
    if (event.httpMethod === 'OPTIONS') {
      return { statusCode: 200, headers: corsHeaders, body: 'OK' };
    }

    if (event.httpMethod !== 'POST') {
      return { statusCode: 405, headers: corsHeaders, body: JSON.stringify({ error: 'Method not allowed' }) };
    }

    let body;
    try {
      body = JSON.parse(event.body || '{}');
    } catch {
      return { statusCode: 400, headers: corsHeaders, body: JSON.stringify({ error: 'Invalid JSON body' }) };
    }

    const { name, email, message, recaptchaToken } = body;

    if (!name || !email || !message) {
      return { statusCode: 400, headers: corsHeaders, body: JSON.stringify({ error: 'Missing fields' }) };
    }

    const secret = await getRecaptchaSecret();

    if (secret) {
      if (!recaptchaToken) {
        return { statusCode: 400, headers: corsHeaders, body: JSON.stringify({ error: 'Missing bot token' }) };
      }

      const params = new URLSearchParams();
      params.append('secret', secret);
      params.append('response', recaptchaToken);

      const recaptchaRes = await new Promise((resolve, reject) => {
        const req = https.request(
          {
            hostname: 'www.google.com',
            path: '/recaptcha/api/siteverify',
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          },
          (res) => {
            let data = '';
            res.on('data', (chunk) => (data += chunk));
            res.on('end', () => {
              try {
                resolve(JSON.parse(data));
              } catch (e) {
                reject(e);
              }
            });
          }
        );
        req.on('error', reject);
        req.write(params.toString());
        req.end();
      });

      if (!recaptchaRes.success || (typeof recaptchaRes.score === 'number' && recaptchaRes.score < 0.5)) {
        return { statusCode: 403, headers: corsHeaders, body: JSON.stringify({ error: 'Failed bot check' }) };
      }
    }
  } catch (error) {
    console.error('Error processing request:', error);
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({ error: 'Internal server error' })
    };
  }
};

// Note: This function requires:
// 1. Lambda execution role with permissions to read from AWS Secrets Manager
// 2. Secret stored at: techrunniti/recaptcha-secret
// 3. Environment variable AWS_REGION set (defaults to ap-south-1)

    // Avoid logging message content (PII)
    const requestId = context.requestId || crypto.randomUUID();
    console.log('Contact submission received', {
      requestId,
      nameLength: String(name).length,
      emailDomain: String(email).split('@')[1] || null,
      messageLength: String(message).length,
      timestamp: new Date().toISOString(),
    });

    return {
      statusCode: 200,
      headers: { ...corsHeaders, 'X-Request-ID': requestId },
      body: JSON.stringify({ success: true, message: 'We will contact you soon!', requestId })
    };
  } catch (error) {
    console.error('Lambda error:', error);
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({ error: 'Internal server error' })
    };

  } catch (error) {
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({ error: 'Server error' })
    };
  }
};
