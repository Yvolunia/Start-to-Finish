var mongoose = require('mongoose');
const db = require("../models");
const Schema = mongoose.Schema;

var userAuthenication = {};

userAuthenication.home = function(req, res) {
	res.render('index', {user :req.user});
};

userAuthenication.register = function(req, res) {
	res.render('register');
};

userAuthenication.doRegister = function(req, res) {
	User.register(new User({username : req.body.username}), req.body.password, function(err, user) {
		if (err) {
			return res.render('register', {user:user});
	}

passport.authenticate('local')(req, res, function () {
	      res.redirect('/');
	    });
	  });
	};

	// Go to login page
userAuthenication.login = function(req, res) {
	  res.render('login');
	};

	// Post login
userAuthenication.doLogin = function(req, res) {
	  passport.authenticate('local')(req, res, function () {
	    res.redirect('/');
	  });
	};

	// logout
userAuthenication.logout = function(req, res) {
	  req.logout();
	  res.redirect('/');
	};

module.exports = userAuthenication;