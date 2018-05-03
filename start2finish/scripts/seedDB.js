const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost/mission"
);

const profileSchema = new Schema[{
	parentName: "Mrs. Robinson",
	kids: [
	   {
		   kidName: "Jack",
		   reward: "6 hours of video games"
	   }, {
		kidName: "Jill",
		reward: "Pick the family night movie"
	  }]
   }]

db.profile
	.remove({})
	.then(() => db.adult.insertMany(adultSeed))
	.then(data => {
		console.log(data.insertedIds.length + " records inserted!");
		process.exit(0);
	})
	.catch(err => {
		console.error(err);
		process.exit(1);
	});

	db.profile
		.remove({})
		.then(() => db.adult.insertMany(adultSeed))
		.then(data => {
			console.log(data.insertedIds.length + " records inserted!");
			process.exit(0);
		})
		.catch(err => {
			console.error(err);
			process.exit(1);
		});