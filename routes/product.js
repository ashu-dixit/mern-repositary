const route = require('express').Router()
const product = require('../models/product')
const users = require('../models/user')


route.get('/usercart',(req,res)=>{
    if(req.user){
    res.send(req.user.cart)
    // let myproducts = []
    // for(let i = 0; i < myArray.length; i++){
    //     product.findById(myArray[i].productid)
    //     .then((cartproduct)=>{
    //         // console.log(cartproduct.productName)            
    //         myproducts.push(cartproduct)
    //         if(i = myproducts.length-1)
    //             res.send(myproducts)    
    //         // console.log(myproducts.length)  
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     })
    // }
}else{
    res.send("<h6>First Add Product</h6>")
}

})

route.post('/cart',(req,res) => {
    var newcart = req.user.cart
    newcart.push(req.body.data)
    users.findByIdAndUpdate(req.user._id,{ cart:newcart} )
    .then((data)=> res.send(data.productName) )
    .catch((err)=>console.log(error))
})


route.get('/',(req,res)=>{
    product.find({}).limit(15)
    .then((data)=> res.send(data))
})

route.post('/',(req,res)=>{
    product.insertMany({
        productName:req.body.productName,
        discription: {
            about:req.productAbout,
            size: req.body.size,
            colour: req.body.colour,
            price: parseInt(req.body.price),   
        },
        supplierid: req.body.supplierid,
        categoryid: req.body.categoryid,
        stock: parseInt(req.body.stock),
        picture: req.body.picture
    })
    .then((data)=> res.send(data))
})

exports = module.exports = route