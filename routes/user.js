const route = require('express').Router()
const users = require('../models/user')

route.get('/api',( req,res)=>{
    users.find({})
        .then((data)=>{
            console.log("Data",data);
            res.json(data)
        })
        .catch((err)=>{
            console.log("err:",err)
        })

})

route.post('/api',(req,res) => {

// instance of users model
const newUser = new users(req.body.data)

// saving data
newUser.save(error =>{
    if(error)
        Console.log('Ooops, Something Happened')
    else
        console.log('Data is saved');
        
})
})

exports = module.exports = route