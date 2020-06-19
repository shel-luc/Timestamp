//Basics require for NodeJS
var express = require('express');
var cors= require('cors');
var bodyParser= require('body-parser');

// Create a instance of express for our app and instantiate bodyParser and cors

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

//Get call to return json
app.get('/dateValues/:dateVal', function(req,res,next){
    //Get the request data for date
    var dateVal = req.params.dateVal;
    //Options for formating date in natural date view
    var dateFormattingOptions= {
        year: 'numeric',
        month:'long',
        day:'numeric'
    };
if(isNaN(dateVal)){
    var naturalDate= new Date(dateVal);
    naturalDate=naturalDate.toLocaleDateString("en-us", dateFormattingOptions);
    var unixDate= new Date(dateVal).getTime()/1000;
}
else{
    var unixDate = dateVal;
    var naturalDate= new Date(dateVal * 1000);
    naturalDate=naturalDate.toLocaleDateString("en-us", dateFormattingOptions);
}
    res.json({unix: unixDate, natural: naturalDate});
});



app.listen(3000, function(){
    console.log('its working')
});