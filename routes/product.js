const route = require('express').Router()
const product = require('../models/product')

route.get('/usercart',(req,res)=>{
    if(req.user){
    let myArray=req.user.cart
    let myproducts = []
    for(let i = 0; i < myArray.length; i++){
        product.findById(myArray[i].productid)
        .then((cartproduct)=>{
            // console.log(cartproduct.productName)            
            myproducts.push(cartproduct)
            console.log(myproducts.length)  
            if(i = myproducts.length-1)
                res.send(myproducts)    
            // console.log(myproducts.length)  
        })
        .catch((error) => {
            console.log(error)
        })
    }
    console.log(myproducts.length)  
}else{
    res.send("<h6>First Add Product</h6>")
}

})

route.post('/cart',(req,res) => {
    var newcart = req.user.data.cart
    newcart.push({
        productid:req.body.productid,
        quantity:req.body.quantity
    })
    users.findAndModify({
        query: {_id:req.user.data._id},
        sort: { rating: 1 },
        update:{cart:newcart}
    })
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