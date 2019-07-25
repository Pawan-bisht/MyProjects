const express = require("express");
const route = express.Router();

route.get('/',(req,res)=>{
    res.send("This is hi from sample todos ");
})
route.get('/hi',(req,res)=>{
    res.send("THis is the hi route from sample todos");
})
module.exports = route;