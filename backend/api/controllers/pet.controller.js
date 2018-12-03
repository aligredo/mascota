const express = require("express");
var mongoose = require("mongoose"),
    Validations = require("../utils/Validations"),
    Pet = mongoose.model("Pet"),
    config = require("../config")
    cloudinary = require('cloudinary');

    cloudinary.config({  //Your Cloudinary API Data
        cloud_name: config.ClOUDINARY_CLOUD_NAME,
        api_key: config.CLOUDINARY_API_KEY,
        api_secret: config.CLOUDINARY_API_SECRET
      });

    module.exports.addPet = function(req, res, next) {
        // Check that the body keys are in the expected format and the required fields are there
        console.log(req.body);
        var valid =
            req.body.ownerUsername &&
            Validations.isString(req.body.ownerUsername) &&
            req.body.ownerMobileNumber &&
            Validations.isString(req.body.ownerMobileNumber) &&
            req.body.name &&
            Validations.isString(req.body.name) &&
            req.body.type &&
            Validations.isString(req.body.type) &&
            req.body.species && 
            Validations.isString(req.body.species) && 
            req.body.gender &&
            Validations.isString(req.body.gender) && 
            req.body.offer &&
            Validations.isString(req.body.offer) && 
            req.body.age && 
            Validations.isNumber(req.body.age) &&
            req.body.photoId;
    
        if (!valid) {
            return res.status(422).json({
                err: null,
                msg:
                    "owner username, owner mobile number, pet's name , pet's type , pet's species , pet's gender ,  pet's age and offer are required fields.",
                data: null
            });
        }

        Pet.findOne({
            ownerUsername: req.body.ownerUsername.trim().toLowerCase()
        }).exec(function(err, pet) {
            // If an err occurred, call the next middleware in the app.js which is the error handler
            if (err) {
                return next(err);
            }

            if (!pet) {
                return res.status(422).json({
                    err: null,
                    msg:
                        "this owner's username is not found",
                    data: null
                });
            }
        });
        req.body.photoId = "http://res.cloudinary.com/mascota/image/upload/".concat(req.body.photoId);
        Pet.create(req.body, function(err, newPet) {
            if (err) {
            }
        });
    };


module.exports.getAllPets = function(req, res, next){
    Pet.find({}).exec(function(err, pets){
        
        if(err){
            return next(err);
        }
        if(!pets){
            return res.status(404)
                .json({
                    err: null,
                    msg: "Pets not found",
                    data: null
                });
        }
        else{
            res.status(200).json({
                err: null,
                msg:"Pets retrieved successfully",
                data: pets
            });
        }
    });
};

module.exports.getPetsByOwnerUsername = function(req, res, next) {
    console.log(req);
	if (!Validations.isString(req.body.username)) {
		return res.status(422).json({
			err: null,
			msg: "username parameter must be a valid String.",
			data: null
		});
	}
	Pet.find({ ownerUsername: req.body.username }).exec(function(err, pets) {
		if (err) {
			return next(err);
		}
		res.status(200).json({
			err: null,
			msg: "Pets are retrieved successfully.",
			data: pets
		});
	});
};

module.exports.getPetsByType = function(req, res, next) {
	if (!Validations.isString(req.params.type)) {
		return res.status(422).json({
			err: null,
			msg: "type must be a valid String.",
			data: null
		});
	}
	Pet.find({ type: req.params.type }).exec(function(err, pets) {
		if (err) {
			return next(err);
		}
		res.status(200).json({
			err: null,
			msg: "Pets are retrieved successfully.",
			data: pets
		});
	});
};

module.exports.getPetsBySpecies = function(req, res, next) {
	if (!Validations.isString(req.params.species)) {
		return res.status(422).json({
			err: null,
			msg: "species must be a valid String.",
			data: null
		});
	}
	Pet.find({ species: req.params.species }).exec(function(err, pets) {
		if (err) {
			return next(err);
		}
		res.status(200).json({
			err: null,
			msg: "Pets are retrieved successfully.",
			data: pets
		});
	});
};

module.exports.getPetsByGender = function(req, res, next) {
	if (!Validations.isString(req.params.gender)) {
		return res.status(422).json({
			err: null,
			msg: "gender must be a valid String.",
			data: null
		});
	}
	Pet.find({ gender: req.params.gender }).exec(function(err, pets) {
		if (err) {
			return next(err);
		}
		res.status(200).json({
			err: null,
			msg: "pets are retrieved successfully.",
			data: pets
		});
	});
};

module.exports.getPetsByOffer = function(req, res, next) {
	if (!Validations.isString(req.params.offer)) {
		return res.status(422).json({
			err: null,
			msg: "offer must be a valid String.",
			data: null
		});
	}
	Pet.find({ offer: req.params.offer }).exec(function(err, pets) {
		if (err) {
			return next(err);
		}
		res.status(200).json({
			err: null,
			msg: "pets are retrieved successfully.",
			data: pets
		});
	});
};


module.exports.deletePet = function(req, res, next){
    console.log(req);
    if (!( req.body.ownerUsername && req.body.name &&
           Validations.isString(req.body.ownerUsername)
        && Validations.isString(req.body.name))){
		return res.status(422).json({
			err: null,
			msg: "not valid request",
			data: null
		});
    }
    else{
        Pet.remove({
             ownerUsername: req.body.ownerUsername, name: req.body.name  }, true).exec(function(err, pets) {
                if (err) {
                    return next(err);
                }
                res.status(200).json({
                    err: null,
                    msg: "Deleted",
                    data: null
                });
            });
    }
};