const mongoose = require('mongoose');

let productSchema = mongoose.Schema({
    name: { type:String,required:true},
    price:{ type:Number,required:true},
})

let productModel = mongoose.model('product',productSchema);
module.exports = productModel;