const mongoose = require('mongoose')

//Schema
const Schema = mongoose.Schema

const category = new Schema({

    categoryName: {
        type: String,
        require: true
    },
    discription: {
        text: String
    }
})
const categories = mongoose.model('category', category)

exports = module.exports = categories