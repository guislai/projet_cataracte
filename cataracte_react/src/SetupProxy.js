const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/pythonapi',
    createProxyMiddleware({
      target: 'http://127.0.0.1:8000/users',
      changeOrigin: true,
      logLevel: 'debug',
    })
  );