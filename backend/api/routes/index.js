var express = require("express"),
	router = express.Router(),
	jwt = require("jsonwebtoken"),
	path = require('path'),
	express = require('express'),
	app = express();
	authCtrl = require("../controllers/auth.controller");
	petCtrl = require("../controllers/pet.controller");
var MongoClient = require("mongodb").MongoClient;

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


//-----------------------------Pet Routes-------------------------
router.post(
	"/pet/addPet",
	isAuthenticated,
	petCtrl.addPet
);

router.get(
	"/pet/getAllPets",
	isAuthenticated,
	petCtrl.getAllPets
);

router.get(
	"/pet/getPetsByOwnerUsername/:username",
	isAuthenticated,
	petCtrl.getPetsByOwnerUsername
);

router.get(
	"/pet/getPetsByType/:type",
	isAuthenticated,
	petCtrl.getPetsByType
);

router.get(
	"/pet/getPetsBySpecies/:species",
	isAuthenticated,
	petCtrl.getPetsBySpecies
);

router.get(
	"/pet/getPetsByGender/:gender",
	isAuthenticated,
	petCtrl.getPetsByGender
);

router.get(
	"/pet/getPetsByOffer/:offer",
	isAuthenticated,
	petCtrl.getPetsByOffer
);

router.delete(
	"/pet/deletePet",
	isAuthenticated,
	petCtrl.deletePet
);

module.exports = router;
