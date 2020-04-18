const mongoose = require('mongoose')

//Schema
const Schema = mongoose.Schema
const product = new Schema({
    productName: {
        type: String,
        required: true
    },
    discription: {
        about:String,
        size: String,
        colour: String,
        price: String,
        discount:{
            type:String,
            default:0
        }
    },
    supplierid: String,
    categoryid: String,
    stock: {
        type: Number,
        required:true
    },
    picture: {
        type: String,
        require:true
    }
})

//model
const products = mongoose.model('products', product)

exports = module.exports = products
