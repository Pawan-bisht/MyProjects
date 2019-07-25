const express = require("express");
const app = express();
const freindroute = require('./friends/friendroute');
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended:true}));
app.set('view engine','ejs');

app.use('/friend',freindroute);

app.listen(7000,function(){
    console.log("Server is runnig at port 7000");
})