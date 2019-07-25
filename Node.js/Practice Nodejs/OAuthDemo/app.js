const express = require('express');
const bodyParser = require('body-parser');
const passportSetup = require('./config/passport-setup');
const app = express();
const authRoutes = require('./routes/auth-routes.js');
const profileRoutes = require('./routes/profile-routes.js');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');
app.set('view engine','ejs');


app.use(cookieSession({
    maxAge:24*60*60*4,
    keys:['This is the secret key to encrypt the user Id in browsers session ']
}))

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect('mongodb+srv://Pawan-dev:developer123@first-demo-outh-yvxqw.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true },()=>{
    console.log('Connected to database');
})

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://Pawan-dev:developer123@first-demo-outh-yvxqw.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//App route
app.get('/',(req,res)=>{
    res.render("home")
})

app.use('/auth',authRoutes);
app.use('/profile',profileRoutes);

app.listen(process.env.port||3000,()=>{
    console.log('Server is running at port 3000........');
})