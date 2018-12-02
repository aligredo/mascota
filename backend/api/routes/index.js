var express = require("express"),
	router = express.Router(),
	jwt = require("jsonwebtoken"),
	path = require('path'),
	express = require('express'),
	app = express();
	authCtrl = require("../controllers/auth.controller");
	petCtrl = require("../controllers/pet.controller");
var MongoClient = require("mongodb").MongoClient;

var mongoose = require("mongoose"),
    Validations = require("../utils/Validations"),
    Pet = mongoose.model("Pet"),
    config = require("../config")
	 router = express.Router(),
	 cloudinary = require('cloudinary'),
	 multer  = require('multer'),
	 cloudinaryStorage = require('multer-storage-cloudinary'),

     //Configuring Cloduinary API
	cloudinary.config({  //Your Cloudinary API Data
        cloud_name: config.ClOUDINARY_CLOUD_NAME,
        api_key: config.CLOUDINARY_API_KEY,
        api_secret: config.CLOUDINARY_API_SECRET
      });

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
router.post("/auth/register", authCtrl.register);
router.post("/auth/login",  authCtrl.login);


//-----------------------------Pet Routes-------------------------
router.post(
	"/pet/addPet",
	petCtrl.addPet
);

router.get(
	"/pet/getAllPets",
	petCtrl.getAllPets
);

router.get(
	"/pet/getPetsByOwnerUsername/:username",
	petCtrl.getPetsByOwnerUsername
);

router.get(
	"/pet/getPetsByType/:type",
	petCtrl.getPetsByType
);

router.get(
	"/pet/getPetsBySpecies/:species",
	petCtrl.getPetsBySpecies
);

router.get(
	"/pet/getPetsByGender/:gender",
	petCtrl.getPetsByGender
);

router.get(
	"/pet/getPetsByOffer/:offer",
	petCtrl.getPetsByOffer
);

router.delete(
	"/pet/deletePet",
	petCtrl.deletePet
);

//----------------------------------Image upload-----------------------------------------
global.photoId = "ss";
router.post("/photoId", (req, res) => {global.photoId = req.body.photoId;
	console.log(global.photoId)
});
router.post("/sendImage",  multer({storage: cloudinaryStorage({
	cloudinary: cloudinary,
	allowedFormats: ['jpg', 'png'],
	destination: function (req, file, callback) { callback(null, './uploads');},
	filename: function (req, file, callback) { callback(null, global.photoId)}}) //MyImage is the name of the image which will be uploaded to your Cloudinary storage
   }).single('Image'), function(req, res){ //To return OK status to the user after uploading
	   return res.status(200).json({
		   msg:"Uploaded"
	   })
   }
);

module.exports = router;
