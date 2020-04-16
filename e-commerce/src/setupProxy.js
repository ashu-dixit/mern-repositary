const proxy = require('http-proxy-middleware').createProxyMiddleware

exports = module.exports = (app)=>{
    app.use(proxy('/auth',{target:'http://localhost:3300/'}))
}