const express = require('express');
const route = express.Router();

var friends = [ "Mohit dev panwar", "Mudit goyal", "Manish arora","Tejas singh" ];

route.get('/',(req,res)=>{
    res.render("friends",{friends:friends});
})

route.post('/addfriend',(req,res)=>{
    console.log(req.body.newfriend);
    friends.push(req.body.newfriend);
    res.redirect('/friend');
})

module.exports = route;