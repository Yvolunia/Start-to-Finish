const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost/mission"
);

const parentSeed = [{
	id: "Mom",
	login: "mom12345",
	children: [{
		userName: "Jimmy",
		parentReward: "4 hours of video games",
		missions: [{
			missionName: "Complete homework by 7:00 pm",
			days: 5,
			pointValue: 25
		}, {
			missionName: "Practice cello",
			days: 3,
			pointValue: 25
		}, {
			missionName: "Mow lawn",
			days: 1,
			pointValue: 25
		}, {
			missionName: "Make bed",
			days: 5,
			pointValue: 25
		}]
	}]
}]

db.parent
	.remove({})
	.then(() => db.parent.insertMany(parentSeed))
	.then(data => {
		console.log(data.insertedIds.length + " records inserted!");
		process.exit(0);
	})
	.catch(err => {
		console.error(err);
		process.exit(1);
	});