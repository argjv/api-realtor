var Property = require('../models/property.model.js');

exports.create = function(req, res) {
    // Create and Save a new property
    if(!req.body.address1 || !req.body.owner) {
        res.status(400).send({message: "Owner and address can not be empty"});
    }
    var property = new Property(req.body);

    property.save(function(err, data) {
        console.log(data);
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating a Property."});
        } else {
            res.send(data);
        }
    });
};

exports.findAll = function(req, res) {
    // Retrieve and return all properties from the database.
    Property.find(function(err, properties){
        if(err) {
            res.status(500).send({message: "Some error occurred while retrieving properties."});
        } else {
            res.send(properties);
        }
    });
};

exports.findOne = function(req, res) {
    // Find a single property with a propertyId
    Property.findById(req.params.propertyId, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not retrieve property with id " + req.params.propertyId});
        } else {
            res.send(data);
        }
    });
};

exports.update = function(req, res) {
    // Update a property identified by the propertyId in the request
    Property.findById(req.params.propertyId, function(err, property) {
        if(err) {
            res.status(500).send({message: "Could not find a property with id " + req.params.propertyId});
        }

        property.owner = req.body.owner;
	    property.address1 = req.body.address1;
	    property.address2 = req.body.address2;

        property.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Could not update property with id " + req.params.propertyId});
            } else {
                res.send(data);
            }
        });
    });
};

exports.delete = function(req, res) {
    // Delete a property with the specified propertyId in the request
    Property.remove({_id: req.params.propertyId}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not delete property with id " + req.params.id});
        } else {
            res.send({message: "Property deleted successfully!"})
        }
    });
};