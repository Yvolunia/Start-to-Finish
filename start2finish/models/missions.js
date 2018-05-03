const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const missionsSchema = new Schema({
  missionName: { type: String, unique: true },


const Missions = mongoose.model("missions", missionsSchema);

module.exports = Missions;
