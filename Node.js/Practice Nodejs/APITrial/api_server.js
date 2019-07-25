const  request = require('request');
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
var originsWhitelist = [
    'http://localhost:4200',      //this is my front-end url for development
     'http://www.myproductionurl.com'
  ];
  var corsOptions = {
    origin: function(origin, callback){
          var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
          callback(null, isWhitelisted);
    },
    credentials:true
  }
  //here is the magic
  app.use(cors());
  

// let customer = {
//     username:"yanki",
//     Id:34
// }
// student.push(customer);
// console.log(student);
// let data = JSON.stringify(student);
// fs.writeFileSync('customer.json',data);
app.get('/read',(req,res)=>{
    let rawdata = fs.readFileSync('customer.json');  
    let customer = JSON.parse(rawdata);
    res.send(customer);
})

app.post('/add',(req,res)=>{
    let rawdata = fs.readFileSync('customer.json');  
    let customer = JSON.parse(rawdata);
    customer.push(req.body);
    let data = JSON.stringify(customer);
    fs.writeFileSync('customer.json',data); 
})


app.delete('/delete/:id',(req,res)=>{
  console.log(req.params.id);
  let rawdata = fs.readFileSync('customer.json');  
  let customer = JSON.parse(rawdata);
  for(let i=0;i<customer.length;i++){
    if(customer[i].Id==req.params.id)
    {
      customer.splice(i,1);
    }
  }
  let data = JSON.stringify(customer);
  fs.writeFileSync('customer.json',data);
  res.send(customer);
})
// console.log(student);
// app.get('/:id',(req,res)=>{
//     console.log(req.params);
//     request('https://jsonplaceholder.typicode.com/users/'+req.params['id'],(error,response,body)=>{
//         debugger;
//         if(error)
//         {
//             console.log("Error happens");
//         }
//         else if(response.statusCode==200)
//         {
//             console.log( body);
//             var data = JSON.parse(body);
//             res.send(data);
//         }
//     })
    
// })



app.listen(4500,function(){
    console.log("The serve is runnig at 4500");
})