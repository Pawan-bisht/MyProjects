var express = require('express');
var app = express();
// var cb0 = function (req, res, next) {
//     console.log('CB0')
//     next()
//   }
  
//   var cb1 = function (req, res, next) {
//     console.log('CB1')
//     next()
//   }
  
//   app.get('/example/d', [cb0, cb1], function (req, res, next) {
//     console.log('the response will be sent by the next function ...')
    
//   }, function (req, res) {
//     res.send('Hello from D!')
//   })
app.use('/public',express.static(__dirname+'/public'));


// Send File 
// app.get('/some/:name',function(req,res){
    
//     var options = {
//         root: __dirname + '/public/',
//         dotfiles: 'deny',
//         headers: {
//             'x-timestamp': Date.now(),
//             'x-sent': true
//         }
//       };
//       var filename = req.params.name;
//     res.sendFile(filename,options,function(err){
//         if(err){
//             next(err);
//         }
//         else
//         {
//             console.log("Sent"+ options);
//         }
//     })
// })



app.listen(8989,function(){
    console.log("server Is in Listening Mode");
});

