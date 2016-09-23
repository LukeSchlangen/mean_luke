var express = require('express');
var app = express();
var mongoose = require('mongoose');
var index = require('./routes/index');
var bodyParser = require('body-parser');

var db = mongoose.connect("mongodb://localhost/luke_build", function(err){
  if(err) {
    console.log(err);
  } else {
    console.log("Database connected!");
  }
});

app.set("port", 5000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use("/", index);

app.listen(app.get("port"), function(){
    console.log("Listening on port: ", app.get("port"));
});
