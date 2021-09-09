const express = require('express');
var bodyParser = require('body-parser')
const app = express();
const mongoose = require('mongoose');
app.use(express.static("./images/"));
const Academic = require('./models/academicModel')
const Degrees = require('./models/degreesModel')

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

app.use(bodyParser());
app.use(express.static('cad'))

app.get('/',function(req,res) {
    res.sendFile("/Users/manav/Documents/cad/index.html");
});

app.post('/responses', function(req, res) {
    var item = req.body.userSearchInput;
    console.log(item);
    Academic.find().select(item).then((data) => {
        res.json(data)
        console.log(data)
    })
});


app.post('/random', function(req, res) {
    Academic.aggregate([{
        $lookup:{
            from:"degrees",
            localField:"_id",
            foreignField:"degree_name",
            as:"degree_data"
        }
    }], function (error, data) {
        return res.json(data);
    //handle error case also
});

});

app.listen(4000)