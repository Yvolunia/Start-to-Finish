const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  adultName: String,
  password: {type: String,required: true },
  profiles: Array

});

var User = mongoose.model("User", UserSchema);

module.exports = User;