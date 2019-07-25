const express = require('express');
const expressHandlebars = require('express-handlebars');
const expressValidator = require('express-validator');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongo = require('mongodb');
const flash = require('connect-flash');
mongoose.connect('mongodb://localhost:27017/loginapp',{useNewUrlParser:true});
var db  = mongoose.connection;


//Init app
const app = express();
// app.use(expressValidator());
var routes = require('./routes/index');
var users = require('./routes/user');
//View Engine
app.set('views',path.join(__dirname,'views'));
app.engine('handlebars',expressHandlebars({defaultLayout:'layout'}));
app.set('view engine','handlebars');

//Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());

//express-session
app.use(session({
    secret:'secret',
    resave:true,
    saveUninitialized:true
}));


// app.use(expressValidator({
//     errorFormatter: function(param,msg,value){
//         var namespace = param.split('.')
//         ,root = namespace.shift()
//         ,formParam = root;
//         while(namespace.length){
//             formParam+='['+namespace.shift() + ']';
//         }
//         return {
//             param:formParam,
//             msg:msg,
//             value:value
//         };
//     }
// }));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(function(req,res,next){
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
})

app.use('/',routes);
app.use('/users',users);
app.listen(5000,function(){
    console.log("App IS Running at 5000 port number!!!!!");
})
