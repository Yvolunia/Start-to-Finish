const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adultSchema = new Schema({
  id: { type: String, required: true },
  login: { type: String, required: true },
  kids: [
     {
     	userName: {type: String, required: true},
     	reward: {type: String},
     	missions: [
     	   {
     	   	missionName: {type: String},
     	   	days: {type: Number},
     	   	pointValue: {type: Number},
     	   }]
     }]
});

const Adult = mongoose.model("adult", adultSchema);

module.exports = adult;
