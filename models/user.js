const mongoose = require('mongoose')

//Schema
const Schema = mongoose.Schema
const user = new Schema({
    name: String,
    googleid:String,
    Date: {
        type: String,
        default: Date.now
    }
})
//model
const users = mongoose.model('users', user)

exports = module.exports = users
