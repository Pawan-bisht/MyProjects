const express = require("express");
const app = express();
const path = require('path')
const admin = express();
app.use(express.static('public/css'));
app.use(express.static('views/home2'));




app.set('view engine','ejs');

app.get('/aadi',(req,res)=>{
    res.render("index",{fullname:"Pawan bisht",job:"Nagarro"});
})
var post = [
    {title:"Nodejs",author:"kammy"},
    {title:"Deep dive",author:"arnav"}
]




app.get('/post',(req,res)=>{
    console.log("We are inside of post");
    res.render("post",{post:post});
})

app.get('/home',(req,res)=>{
    console.log("home page1");
    res.render("home2/home1");
})


admin.get('/',(req,res)=>{
    console.log(admin.mountpath);
    res.send("We are inside of admin router");
})
app.use('/admin',admin);

app.get('/show',(req,res)=>{
    console.log("we are inside show")
    res.render('find');
})
app.listen(3232,(req,res)=>{
    console.log("Server is listening at 3232");
})