const proxy = require('http-proxy-middleware').createProxyMiddleware

exports = module.exports = (app)=>{
    app.use(proxy('/auth',{target:'http://127.0.0.1:3300/'}))
    
}