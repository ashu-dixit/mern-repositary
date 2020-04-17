const mongoose = require('mongoose')

//Schema
const Schema = mongoose.Schema
const kart = new Schema({
    productList:[
        {
            productid:mongoose.Schema.Types.ObjectId,
            quantity:Number
        }
        
    ]
    
})
//model
const cart = mongoose.model('cart', kart)

exports = module.exports = cart
