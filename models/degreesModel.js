const mongoose = require('mongoose');
let userSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    degree_name:String,
    duration:String,
    requirements:String,
    semester:String,
    domain:String,
},{collection:'degrees'});
module.exports = mongoose.model('degress', userSchema);