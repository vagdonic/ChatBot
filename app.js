const express = require('express');
var bodyParser = require('body-parser')
const app = express();
app.use(express.static('public'))

app.get('/',function(req,res) {
    res.sendFile("/Users/manav/Documents/cad/index4.html");
});

app.listen(4000)