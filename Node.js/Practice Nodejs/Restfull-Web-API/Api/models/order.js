const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    product:{type:mongoose.Schema.Types.ObjectId,ref:'product',required:true},
    quantity:{type:Number,default:1 }
})

const orderModel = mongoose.model('order',orderSchema);
module.exports = orderModel;