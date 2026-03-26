const crypto = require('crypto');

const getRecaptchaSecret = () => process.env.RECAPTCHA_SECRET || '';

const verifyRecaptcha = async (token, secret, remoteIp) => {
  if (!secret || !token) return { success: false, skipped: true };

  const params = new URLSearchParams({
    secret,
    response: token,
  });
  if (remoteIp) params.append('remoteip', remoteIp);

  const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params.toString(),
  });

  const data = await response.json();
  return data;
};

const LOG_VERSION = '2026-03-27-v2';

exports.handler = async (event, context) => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  try {
    if (event.httpMethod === 'OPTIONS') {
      return { statusCode: 200, headers: corsHeaders, body: 'OK' };
    }

    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        headers: corsHeaders,
        body: JSON.stringify({ error: 'Method not allowed' }),
      };
    }

    const body = JSON.parse(event.body || '{}');
    const { name, email, phone, subject, preferredTime, message, recaptchaToken } = body;

    if (!name || !email || !phone || !subject || !preferredTime || !message) {
      return {
        statusCode: 400,
        headers: corsHeaders,
        body: JSON.stringify({ error: 'Missing fields' }),
      };
    }

    const secret = getRecaptchaSecret();

    if (secret && recaptchaToken) {
      const recaptcha = await verifyRecaptcha(recaptchaToken, secret, event?.requestContext?.identity?.sourceIp);
      if (!recaptcha?.success) {
        return {
          statusCode: 400,
          headers: corsHeaders,
          body: JSON.stringify({ error: 'reCAPTCHA validation failed' }),
        };
      }
    }

    // ✅ Logging safely
    const requestId = context.awsRequestId || crypto.randomUUID();
    console.log('Contact submission received', {
      requestId,
      logVersion: LOG_VERSION,
      name,
      email,
      phone,
      subject,
      preferredTime,
      messagePreview: String(message).slice(0, 120),
      messageLength: message.length,
    });

    return {
      statusCode: 200,
      headers: { ...corsHeaders, 'X-Request-ID': requestId },
      body: JSON.stringify({
        success: true,
        message: 'We will contact you soon!',
        requestId,
      }),
    };

  } catch (error) {
    console.error('Lambda error:', error);
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};
