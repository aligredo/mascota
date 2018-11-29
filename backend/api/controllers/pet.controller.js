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