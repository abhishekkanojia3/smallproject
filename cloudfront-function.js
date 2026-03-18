(function handler(event) {
  var response = event.response;
  var headers = response.headers;

  headers['strict-transport-security'] = {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  };
  headers['x-content-type-options'] = {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  };
  headers['x-frame-options'] = {
    key: 'X-Frame-Options',
    value: 'DENY'
  };
  headers['x-xss-protection'] = {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  };
  headers['referrer-policy'] = {
    key: 'Referrer-Policy',
    value: 'no-referrer-when-downgrade'
  };
  headers['permissions-policy'] = {
    key: 'Permissions-Policy',
    value: 'geolocation=(), microphone=(), camera=()'
  };

  headers['content-security-policy'] = {
    key: 'Content-Security-Policy',
    value: "default-src 'self'; connect-src 'self' https:; script-src 'self' https://www.google.com https://www.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com; object-src 'none'; frame-ancestors 'none';"
  };

  return response;
})(event);
