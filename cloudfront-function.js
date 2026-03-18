function handler(event) {
  var response = event.response;
  var headers = response.headers;

  // CloudFront Functions expects header entries shaped as { value: "..." }
  headers['strict-transport-security'] = {
    value: 'max-age=63072000; includeSubDomains; preload'
  };
  headers['x-content-type-options'] = {
    value: 'nosniff'
  };
  headers['x-frame-options'] = {
    value: 'DENY'
  };
  headers['x-xss-protection'] = {
    value: '1; mode=block'
  };
  headers['referrer-policy'] = {
    value: 'no-referrer-when-downgrade'
  };
  headers['permissions-policy'] = {
    value: 'geolocation=(), microphone=(), camera=()'
  };

  headers['content-security-policy'] = {
    value: "default-src 'self'; connect-src 'self' https:; script-src 'self' https://www.google.com https://www.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com; object-src 'none'; frame-ancestors 'none';"
  };

  return response;
}