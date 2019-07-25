const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/yelpcamp',{useNewUrlParser:true});
var campgroundSchema = new mongoose.Schema({
    name:String,
    image:String,
    description:String
})

var campground =  mongoose.model('campground',campgroundSchema);  
module.exports = campground;