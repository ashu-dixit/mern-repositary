const passport = require('passport')
const route = require('express').Router()

route.get('/logout',(req,res) => {
    req.logout()
    res.redirect('http://localhost:3000')
})

route.get('/google', passport.authenticate('google',{
    scope:['profile','email']
}))

route.get('/google/redirect',passport.authenticate('google'),(req,res) => {

    // res.send('you reached a callback url')
    res.redirect("http://localhost:3000")
})

exports = module.exports = route