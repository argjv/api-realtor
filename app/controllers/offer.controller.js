var Offer = require('../models/offer.model.js');

exports.create = function(req, res) {
    // Create and Save a new offer
    if(!req.body.owner || !req.body.offer || !req.body.ethid) {
        res.status(400).send({message: "Owner, offer and ethid can not be empty"});
    }
    var offer = new Offer(req.body);

    offer.save(function(err, data) {
        console.log(data);
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating a Offer."});
        } else {
            res.send(data);
        }
    });
};

exports.findAll = function(req, res) {
    let filters = {}
    Object.assign(filters, req.query);
    // Retrieve and return all properties from the database.
    Offer.find(filters, function(err, properties){
        if(err) {
            res.status(500).send({message: "Some error occurred while retrieving properties."});
        } else {
            res.send(properties);
        }
    });
};

exports.findOne = function(req, res) {
    // Find a single offer with an owner
    Offer.findOne({owner: req.params.owner}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not retrieve offer with id " + req.params.owner});
        } else {
            res.send(data);
        }
    });
};

exports.update = function(req, res) {
    // Update a offer identified by the owner in the request
    Offer.findOne({owner: req.params.owner}, function(err, offer) {
        if(err) {
            res.status(500).send({message: "Could not find a offer with id " + req.params.owner});
        }

        Object.assign(offer, req.body);

        offer.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Could not update offer with id " + req.params.owner});
            } else {
                res.send(data);
            }
        });
    });
};

exports.delete = function(req, res) {
    // Delete a offer with the specified owner in the request
    Offer.remove({owner: req.params.owner}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not delete offer with id " + req.params.owner});
        } else {
            res.send({message: "Offer deleted successfully!"})
        }
    });
};