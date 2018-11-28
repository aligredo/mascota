var express = require("express"),
	router = express.Router(),
	jwt = require("jsonwebtoken"),
	cloudinary = require('cloudinary'),
	multer  = require('multer'),
	cloudinaryStorage = require('multer-storage-cloudinary'),
	path = require('path'),
	express = require('express'),
	app = express();
	cloudinary.config({  //Your Cloudinary API Data
	  cloud_name: 'dgwildqsv',
	  api_key: '885116352125168',
	  api_secret: 'dwvBE716ok5Aoh0m2PSWDXIkLCM'
	});
	authCtrl = require("../controllers/auth.controller");
var multer = require("multer");
var MongoClient = require("mongodb").MongoClient;
var assert = require("assert");
//var url = "mongodb://localhost:27017/office-hours";
// 	var path = require('path');
//   var fs = require('fs');
//   var crypto = require('crypto');
//   var path = require('path')
//   var multer = require('multer')

//   var storage = multer.diskStorage({
// 	destination: './public/images/',
// 	filename: function (req, file, cb) {
// 	  crypto.pseudoRandomBytes(16, function (err, raw) {
// 		if (err) return cb(err);

// 		cb(null, raw.toString('hex') + path.extname(file.originalname));
// 	  })
// 	}
//   })

//   var upload = multer({ storage: storage })

//   router.get('/', function (req, res) {
// 	  res.render('register');
//   });

var isAuthenticated = function(req, res, next) {
	var token = req.headers["authorization"];
	if (!token) {
		return res.status(401).json({
			error: null,
			msg: "You have to login first.",
			data: null
		});
	}
	jwt.verify(token, req.app.get("secret"), function(err, decodedToken) {
		if (err) {
			return res.status(401).json({
				error: err,
				msg: "Login timed out, please login again.",
				data: null
			});
		}
		req.decodedToken = decodedToken;
		next();
	});
};

var isNotAuthenticated = function(req, res, next) {
	// Check that the request doesn't have the JWT in the authorization header
	var token = req.headers["authorization"];
	if (token) {
		return res.status(403).json({
			error: null,
			msg: "You are already logged in.",
			data: null
		});
	}
	next();
};

//-----------------------------Authentication Routes-------------------------
router.post("/auth/register", isNotAuthenticated, authCtrl.register);
router.post("/auth/login", isNotAuthenticated, authCtrl.login);

module.exports = router;
