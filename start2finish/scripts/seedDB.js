const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost/start_to_finish");

const userSeed = [
	{
	adultName: "Mom",
	password: "mom12345",
	profiles: [{
		kidName: "Jack",
		reward: "5 hours video games",
		missions: [{
			missionName:"Complete homework by 7:00 pm",
			completed: 0},
			{
			missionName:"Mow lawn",
			completed: 0},
			{ 
			missionName: "Feed dogs",
		    completed: 0}]
	   },
	   
		{kidName: "Beverly",
		reward: "5 hours video games",
		missions: [{
			missionName:"Complete homework by 7:00 pm",
			completed: 0},
			{
			missionName:"Wash dishes",
			completed: 0},
			{ 
			missionName: "Feed snake",
		    completed: 0}]}]
	},
	{
		adultName: "Dad",
		password: "dad12345",
		profiles: [{
			kidName: "Bob",
			reward: "5 hours video games",
			missions: [{
				missionName:"Complete homework by 7:00 pm",
				completed: 0},
				{
				missionName:"Mow lawn",
				completed: 0},
				{ 
				missionName: "Feed dogs",
				completed: 0}]
		},
			{kidName: "Debbie",
			reward: "5 hours video games",
			missions: [{
				missionName:"Complete homework by 7:00 pm",
				completed: 0},
				{
				missionName:"Practice piano",
				completed: 0},
				{ 
				missionName: "Feed dogs",
				completed: 0}]}]
		}
];

db.user
	.remove({})
	.then(() => db.user.collection.insertMany(userSeed))
	.then(data => {
		console.log(data.insertedIds.length + " records inserted!");
		process.exit(0);
	})
	.catch(err => {
		console.error(err);
		process.exit(1);
	});

 