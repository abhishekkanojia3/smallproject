const { handler } = require('../../lambda/contact');

module.exports = async function contactApi(req, res) {
  if (req.method === 'OPTIONS') {
    res.status(200).send('OK');
    return;
  }

  const event = {
    httpMethod: req.method,
    headers: req.headers,
    body: JSON.stringify(req.body || {}),
    requestContext: {
      identity: {
        sourceIp: req.socket?.remoteAddress,
      },
    },
  };

  try {
    const result = await handler(event, { awsRequestId: req.headers['x-request-id'] });
    const status = result?.statusCode || 200;
    if (result?.headers) {
      Object.entries(result.headers).forEach(([key, value]) => {
        if (typeof value !== 'undefined') res.setHeader(key, value);
      });
    }
    const body = result?.body ? JSON.parse(result.body) : {};
    res.status(status).json(body);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
