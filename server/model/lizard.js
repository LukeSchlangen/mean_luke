var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var lizardSchema = new Schema({
  name:  {type: String},
  color: {type: String},
  size:  {type: String}
});

module.exports = mongoose.model("Lizard", lizardSchema);
