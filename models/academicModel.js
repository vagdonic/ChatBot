const { Int32 } = require('mongodb');
const mongoose = require('mongoose');
let userSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    subject:String,
    faculty:String,
    lab:String,
    theory:String,
    semester:Number,
},{collection:'academic'});

module.exports = mongoose.model('academic', userSchema);