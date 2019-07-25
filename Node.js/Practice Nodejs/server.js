const express = require("express");
const app = express();
const bird = require('./birds');
const todosRoute = require("./Todos/todos");
 const admin = express();
 const todosSample = require("./Todos/sampletodos");
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//app.use("/sample",todosSample);



app.get('/ejs',(req,res)=>{
    res.render("index.ejs");
})





admin.get('/', function (req, res) {
    console.log(admin.mountpath); // [ '/adm*n', '/manager' ]
    console.log(req.baseUrl);
    res.send('Admin Homepage');
  });
  
  var secret = express();
  secret.get('/', function (req, res) {
      console.log(req.body);
    console.log(secret.mountpath); // /secr*t
    console.log(req.baseUrl);
    res.send('Admin Secret');
  });
  

  admin.use('/secr*t', secret); // load the 'secret' router on '/secr*t', on the 'admin' sub app
  app.use(['/adm*n', '/manager','/mohit'], admin); // load the 'admin' router on '/adm*n' and '/manager', on the 






  app.use('/todos',todosRoute);
 app.use('/bird',bird);

 app.use('/sample',todosSample);


/*In this we pass the paramenter as the /:<variable name> 
And we can access that prameter by using req.params.<variable name>
*/

/*By passing the query parameter in url we get those query by  localhost://4200/user?name = "pawan"
req.query.
*/
 
// app.get("/name/:name",function(req,res){        
//     res.send("Yeah we got It " +req.params.name +" "+req.query.name);
// }) 
// var cb0 = function (req, res, next) {
//     console.log('CB0')
//     next()
//   }
  
//   var cb1 = function (req, res, next) {
//     res.send("End Now")
//     next()
//   }
  
//   app.get('/example/d', [cb0, cb1], function (req, res, next) {
//     console.log('the response will be sent by the next function ...')
//     next();
//   },function(req,res){
//      res.send("End here");
//   })



// Middle-ware


// app.use(function(req,res,next){
//     console.log(Date.now());
//     next();
// })

// app.use('/b',function(req,res,next){
//     console.log("We are in B");
//     next();
// })
// app.use('/a',function(req,res,next){
//     console.log("hello hi there");
//     next();
    
// })
// app.get('/a',function(req,res,next){
//     console.log("We are in A");
// //    res.send("This is it");
//     res.send("hello");
//     next();
    
// });
// app.get('/a',function(req,res,next){
//     console.log("hello 2")
//     next()
// })

// app.get('/a',function(req,res,next){
//     console.log("hello 3")
// })

// app.get('/xyz/:id',function(req,res){
//     res.send(req.params ,req.query);
// })
// app.get('/user/:id', function (req, res, next) {
//     // if the user ID is 0, skip to the next route
//     if (req.params.id === '0') next('route')
//     // otherwise pass the control to the next middleware function in this stack
//     else next()
//   }, function (req, res, next) {
//     // send a regular response
//     res.send('regular')
//   })
  
//   // handler for the /user/:id path, which sends a special response
//   app.get('/user/:id', function (req, res, next) {
//     res.send('special')
//   })







app.listen(3333,function(){
    console.log("Server is running in listen mode");
})