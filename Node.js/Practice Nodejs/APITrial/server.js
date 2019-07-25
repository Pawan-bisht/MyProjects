const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
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

  let data = fs.readFileSync('newFile.json');
  let newdata = JSON.parse(data);
  console.log( newdata.employees[0]);
  console.log('this is the break point');
  console.log(newdata.employees[1]);




  app.listen(4300,function(){
      console.log("Server runnign at 4300");
  })