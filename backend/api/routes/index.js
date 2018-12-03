var express = require("express"),
	router = express.Router(),
	express = require('express'),
	authCtrl = require("../controllers/auth.controller");
	petCtrl = require("../controllers/pet.controller");

var mongoose = require("mongoose"),
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

router.post(
	"/pet/getPetsByOwnerUsername",
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

router.post(
	"/pet/deletePet",
	petCtrl.deletePet
);

//----------------------------------Image upload-----------------------------------------
global.photoId = "ss";
router.post("/photoId", (req, res) => {global.photoId = req.body.photoId;
	console.log(global.photoId)
	return res.status(200).json({
		data:null,
		err:null
	});
});
router.post("/sendImage",  multer({storage: cloudinaryStorage({
	cloudinary: cloudinary,
	allowedFormats: ['jpg', 'png'],
	destination: function (req, file, callback) { callback(null, './uploads');},
	filename: function (req, file, callback) { callback(null, global.photoId)}}) //MyImage is the name of the image which will be uploaded to your Cloudinary storage
   }).single('Image')

);

module.exports = router;
