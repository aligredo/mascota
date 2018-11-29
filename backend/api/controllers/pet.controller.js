const express = require("express");
var mongoose = require("mongoose"),
    Validations = require("../utils/Validations"),
    Pet = mongoose.model("Pet");




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
	if (!Validations.isString(req.body.type)) {
		return res.status(422).json({
			err: null,
			msg: "type must be a valid String.",
			data: null
		});
	}
	Pet.find({ type: req.body.type }).exec(function(err, pets) {
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
	if (!Validations.isString(req.body.species)) {
		return res.status(422).json({
			err: null,
			msg: "species must be a valid String.",
			data: null
		});
	}
	Pet.find({ species: req.body.species }).exec(function(err, pets) {
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