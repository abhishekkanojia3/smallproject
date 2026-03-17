const https = require('https');
const { URLSearchParams } = require('url');

exports.handler = async (event) => {
  try {
    const corsHeaders = {
      'Access-Control-Allow-Origin': 'https://techrunniti.com',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Content-Type': 'application/json',
    };

    if (event.httpMethod === 'OPTIONS') {
      return { statusCode: 200, headers: corsHeaders, body: 'OK' };
    }

    if (event.httpMethod !== 'POST') {
      return { statusCode: 405, headers: corsHeaders, body: JSON.stringify({ error: 'Method not allowed' }) };
    }

    const body = JSON.parse(event.body || '{}');
    const { name, email, message, recaptchaToken } = body;

    if (!name || !email || !message) {
      return { statusCode: 400, headers: corsHeaders, body: JSON.stringify({ error: 'Missing fields' }) };
    }

    // Verify reCAPTCHA v3
    const params = new URLSearchParams();
    params.append('secret', process.env.RECAPTCHA_SECRET);
    params.append('response', recaptchaToken);

    const recaptchaRes = await new Promise((resolve, reject) => {
      const req = https.request({
        hostname: 'www.google.com',
        path: '/recaptcha/api/siteverify',
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }, (res) => {
        let data = '';
        res.on('data', (chunk) => data += chunk);
        res.on('end', () => resolve(JSON.parse(data)));
      });
      req.on('error', reject);
      req.write(params.toString());
      req.end();
    });

    if (!recaptchaRes.success || recaptchaRes.score < 0.5) {
      return { statusCode: 403, headers: corsHeaders, body: JSON.stringify({ error: 'Failed bot check' }) };
    }

    console.log('Contact submission:', { name, email, message });

    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify({ success: true, message: 'We will contact you soon!' })
    };

  } catch (error) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Server error' })
    };
  }
};
