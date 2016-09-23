var express = require("express");
var router = express.Router();
var path = require('path');
var LizardSchema = require('../model/lizard');

router.get("/lizards", function(req,res){
    LizardSchema.find({}, function(err,data){
      if(err) console.log(err);
      res.send(data);
    });
});

router.get("/lizards/:id", function(req,res){
    LizardSchema.findById(req.params.id, function(err,data){
      if(err) {
        console.log(err);
      } else {
        res.send(data);
      }
    });
});

router.post("/lizards/add", function(req,res){
    var lizard = new LizardSchema({
      name: req.body.name,
      color: req.body.color,
      size: req.body.size
    });

    lizard.save(function(err, data){
      if(err) console.log(err);
      res.send(data);
    });
});

router.delete("/lizards/:id", function(req,res){
    LizardSchema.findByIdAndRemove(req.params.id, function(err, data){
        if(err) console.log(err);
        res.send(data);
    });
});

router.get("/*", function(req,res){
    console.log(req.params);
    var file = req.params[0] || "/views/index.html";
    res.sendFile(path.join(__dirname,"../public/", file));
});

module.exports = router;
