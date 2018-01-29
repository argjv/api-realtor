var User = require('../models/user.model.js');

exports.create = function(req, res) {
    // Create and Save a new user
    if(!req.body.name || !req.body.lastname || !req.body.address1) {
        res.status(400).send({message: "User name, last name and address can not be empty"});
    }
    var user = new User({
    	name: req.body.name,
	    lastname: req.body.lastname,
	    address1: req.body.address1 || "",
	    address2: req.body.address2 || "",
	    nationality: req.body.nationality || "Unknown"
    });

    user.save(function(err, data) {
        console.log(data);
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating a User."});
        } else {
            res.send(data);
        }
    });
};

exports.findAll = function(req, res) {
    // Retrieve and return all users from the database.
    User.find(function(err, users){
        if(err) {
            res.status(500).send({message: "Some error occurred while retrieving users."});
        } else {
            res.send(users);
        }
    });
};

exports.findOne = function(req, res) {
    // Find a single user with a userId
    User.findById(req.params.userId, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not retrieve user with id " + req.params.userId});
        } else {
            res.send(data);
        }
    });
};

exports.update = function(req, res) {
    // Update a user identified by the userId in the request
    User.findById(req.params.userId, function(err, user) {
        if(err) {
            res.status(500).send({message: "Could not find a user with id " + req.params.userId});
        }

        user.name = req.body.name;
	    user.lastname = req.body.lastname;
	    user.address1 = req.body.address1;
	    user.address2 = req.body.address2;
	    user.nationality = req.body.nationality;

        user.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Could not update user with id " + req.params.userId});
            } else {
                res.send(data);
            }
        });
    });
};

exports.delete = function(req, res) {
    // Delete a user with the specified userId in the request
    User.remove({_id: req.params.userId}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not delete user with id " + req.params.id});
        } else {
            res.send({message: "User deleted successfully!"})
        }
    });
};