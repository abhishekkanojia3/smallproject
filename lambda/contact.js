const crypto = require('crypto');

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
    const { name, email, message, recaptchaToken } = body;

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers: corsHeaders,
        body: JSON.stringify({ error: 'Missing fields' }),
      };
    }

    const secret = await getRecaptchaSecret();

    // reCAPTCHA validation same as your code...

    // ✅ Logging safely
    const requestId = context.awsRequestId || crypto.randomUUID();
    console.log('Contact submission received', {
      requestId,
      nameLength: name.length,
      emailDomain: email.split('@')[1] || null,
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