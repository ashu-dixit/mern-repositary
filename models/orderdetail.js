
const mongoose = require('mongoose')

//Schema
const Schema = mongoose.Schema

const orderDetail = new Schema({

    productID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    orderNumber: {
        type: Number,
        required: true
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    discription:{
        price:Float64Array,
        discount:Float64Array,
        tax: Float64Array,
    },
    shipDate:  Date,
    Date: {
        type: Date,
        default: Date.now
    }
})
const orderdetail = mongoose.model('orderDetail', orderDetail)

exports = module.exports = orderdetail