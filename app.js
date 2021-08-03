const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Academic = require('./models/academicModel')
mongoose.connect('mongodb+srv://vagdonic:vagdonic123@cluster0.7hivh.mongodb.net/studentdb?retryWrites=true&w=majority', 
{
    useNewUrlParser: true,
    useUnifiedTopology: true
}
);/*.then(() => {
    console.warn('Successfully connected to DB');
})*/

/*// GET data:
Academic.find({}, function(err, academicList){
    if(err) console.warn(err);
    console.warn(academicList);
}); */

/* // POST data:
const data = new Academic({
    _id: new mongoose.Types.ObjectId(),
    subject: "Service Oriented Computing",
    faculty: "Prof. Prashant Jani",
    lab: "Yes",
    theory: "Yes",
    semester: "7"
});

data.save().then((result) => {
    console.warn(result);
})
.catch(err => console.warn(err)); */

// GET api
app.get('/academic', function(req, res){
    Academic.find().then((data) => {
        res.json(data)
    })
})

app.listen(4000)