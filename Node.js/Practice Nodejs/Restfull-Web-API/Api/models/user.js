const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
   
    email:{type:String,required:true,unique:true,
    match:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/},
    password:{type:String,required:true}
})

const userModel = mongoose.model('user',userSchema);
module.exports = userModel;