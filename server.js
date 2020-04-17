// npm init
// npm i mongoose express axios morgan concurrently
//create-react-app e-commerce
//Change package.json script to run concurrently
//add proxy to react app to enable request
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const path = require('path')
const passport = require('passport')
const passportSetup = require('./passport-setup') 
const cookieSession = require('cookie-session')
const keys = require('./config/keys')

const app = express()
const PORT = process.env.PORT || 3300


//authentication
app.use(cookieSession({
    maxAge: 6*60*60*1000,
    keys: [keys.session.key]
}))
app.use(passport.initialize())
app.use(passport.session())

app.use(morgan('tiny')) 
app.get('/',(req,res)=>{
    res.send('<a href="/auth/google" >Login</a>')
})
app.use('/auth',require('./routes/authentic'))


//mongodb cluster
const MONGODB_URI = keys.mongodb.MONGODB_URI
mongoose.connect(MONGODB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true 
})

app.listen(PORT, console.log('sever is starting at '+ PORT))