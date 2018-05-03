const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  parentName: { type: String, required: true },
  kids: [
     {
     	kidName: {type: String, required: true, unique: true },
     	reward: {type: String},
     }],

missions: [
	{
	  type: Schema.Types.ObjectId,

	  ref: "Missions"
	}
   ]
});

const Profile = mongoose.model("profile", profileSchema);

module.exports = Profile;
