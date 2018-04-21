const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;


// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactmission",
  {
    useMongoClient: true
  }
);

const parentSeed = [
{
	id: "Mom",
	login: "mom12345",
	children: [
	{
		userName: "Jimmy",
		parentReward: "4 hours of video games",
		goals: [{
			goalName: "Complete homework by 7:00 pm",
			days: 5,
			pointValue: 25
		}, {
			goalName: "Practice cello",
			days: 3,
			pointValue: 25
		}, {
			goalName: "Mow lawn",
			days: 1,
			pointValue: 25
		}, {
			goalName: "Make bed"
			days: 5,
			pointValue: 25
		}]
	}]
}]

db.mission
  .remove({})
  .then(() => db.mission.collection.insertMany(parentSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });