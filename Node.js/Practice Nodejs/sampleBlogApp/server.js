const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

mongoose.connect('mongodb://localhost:27017/restfullBlog',{useNewUrlParser:true});
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.set('view engine','ejs');
app.use(express.static('public'));
app.use('/public',express.static(__dirname+'/public'));
app.use('/',function(req,res){
    res.send("Your are in HOMEPAGE!!!!");
})

var blogSchema = new mongoose.Schema({
    title:String,
    image:String,
    body:String,
    created_Date:{type:Date,default:Date.now}
})
var Blog = mongoose.model("Blog",blogSchema);
// Blog.create({
//     title:'this is my test title',
//     image:'https://image.shutterstock.com/image-illustration/free-sample-rubber-stamp-over-260nw-144304825.jpg',
//     body:'this is my first thing to test ',
// })

app.get('/blog',function(req,res){
    Blog.find({},function(err,data){
        if(err)
            res.send("SOMETHING WENT WRONG!!!!");
        else
            res.render('index',{data:data});    
    })
})

app.get('/blog/new',function(req,res){
    res.render('new');
})

app.get('/blog/:id/edit',function(req,res){
    Blog.findById(req.params.id,(err,data)=>{
        if(err)
            res.send(err);
        else
        {
            console.log(data);
            res.render('edit',{blog:data});
        }
            
    })
    
})
app.get('/blog/:id/show',function(req,res){
    
    Blog.findById(req.params.id,function(err,data){
        if(err)
        res.send("Sonething goes wrong");
        else
        res.render('show',{blog:data});
    })
})

app.post('/blog',function(req,res){
    // Blog.create({
    //     title:req.body.title,
    //     body:req.body.body,
    //     image:req.body.image
    // })
    console.log('we are here');
    console.log(req.body.blog);
    Blog.create(req.body.blog,(err,data)=>{
        if(err)
            console.log('There is something goes wrong');
        else
            {
                console.log(data);    
                res.redirect('/blog');
            }
    })
    
})

app.put('/blog/:id',function(req,res){
    Blog.findByIdAndUpdate(req.params.id,req.body.blog,function(err,updatedData){
        if(err)
            res.send(err);
        else
            res.redirect('/blog/'+req.params.id +'/show');
    })
})

app.delete('/blog/:id',function(req,res){
    Blog.findByIdAndRemove(req.params.id,req.body.blog,function(err){
        if(err)
            res.send(err);
        else
            res.redirect('/blog');    
    })
    // res.redirect('/blog');
})



app.listen(5400,function(){
    console.log('Server is running at 5400!!!!!');
})