const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const parentSchema = new Schema({
  id: { type: String, required: true },
  login: { type: String, required: true },
  children [
     {
     	userName: {type: String, required: true},
     	parentReward: {type: String},
     	goals: [
     	   {
     	   	goalName: {type: String},
     	   	days: {type: Number},
     	   	pointValue: {type: Number},
     	   }]
     }]
});

const Parent = mongoose.model("Parent", parentSchema);

module.exports = Parent;
