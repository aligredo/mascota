require ("./api/config/DBConnection");

var express = require("express"),
    MongoClient = require("mongodb").MongoClient,
    bodyParser = require("body-parser"),
    routes = require("./api/routes"),
    router = express.Router(),
     path = require('path'),
    url = "mongodb://localhost:3000/mascota",
    app = express();
    /*
      Middleware to parse the request body that is in format "application/json" or
      "application/x-www-form-urlencoded" as json and make it available as a key on the req
      object as req.body
    */
    app.use(bodyParser.json());
    app.use(
    	bodyParser.urlencoded({
    		extended: false
    	})
    );
    app.use(express.static(path.join(__dirname, 'uploads')));

    app.use(function (req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });
    /*Middleware to match the request with one of our defined routes to do a certain function,
All requests should have /api before writing the route as a convention for api servers
*/
    app.use("/api", routes);
    console.log("Mascota is up and running!");
    module.exports = app;
