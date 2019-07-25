const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cat_app',{useNewUrlParser:true});
console.log("Yes we did it");
var catschema  = new mongoose.Schema({
    name:String,
    age:Number,
    temperament:String
});

var pawanschema = new mongoose.Schema({
    name:String,
    age:Number,
    designation:String,
    Company:String
});



//var pawan = mongoose.model('pawanmodel',pawanschema);
 var Cat = mongoose.model('Cat',catschema);
Cat.find({},function(err,cats){
    if(err)
        console.log(err);

        else
        console.log(cats);
})


// var george = new Cat({
//     name:"Mrs Norris",
//     age:9,
//     temperament:'Gaurding cat'
// })

Cat.create({
    name:'Mrs Mehta meow',
    age:10,
    temperament:'Fluffy(always eating)'
},function(err,cat){
    if(err)
        console.log(err);
     else
        console.log(cat);   
})
console.log("This is find method called");
Cat.find({},function(err,cats){
    if(err)
        console.log(err);

        else
        console.log(cats);
})
// george.save(function(err,data){
//     if(err)
//     {
//         console.log("Something went wrong");
//     }
//     else
//     {
//         console.log(data);
//     }
// });

// var newperson = new pawan({
//     name:'pawan bisht',
//     age:24,
//     designation:'junior associates',
//     Company:'Nagarro'
// });

//newperson.save();

