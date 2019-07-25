const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

const PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(morgan('dev'));

const productRoutes = require('./Api/routes/products');
const orderRoutes = require('./Api/routes/orders');
const userRoutes = require('./Api/routes/users');
mongoose.connect('mongodb+srv://node-api-user:nodeapipassword@node-api-akdhn.mongodb.net/test?retryWrites=true&w=majority',
{useNewUrlParser:true},()=>{
    console.log("Connected");
})
app.use('/products',productRoutes);
app.use('/orders',orderRoutes);
app.use('/user',userRoutes);

app.use((req,res,next)=>{
    const error = new Error('NOT FOUND');
    error.status=404;
    next(error);
})

app.use((error,req,res,next)=>{
    res.status(error.status||500);
    res.json({
        error:{
            message:error.message
        }
    })
})

app.listen(PORT,()=>{
    console.log('Server running at '+PORT);
})