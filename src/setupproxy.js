const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = app => {
    app.use (
        createProxyMiddleware('/getCountries',
        {
            target: 'http://jagah2-env.eba-m3zawypz.us-east-2.elasticbeanstalk.com',
            changeOrigin: true
        }
        
        )
    )
}