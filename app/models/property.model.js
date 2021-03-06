var mongoose = require('mongoose');

//Added proper schema for DB structure
var Schema = mongoose.Schema

var PropertySchema = new Schema({
    ethid: String,
    address1: String,
    address2: String,
    owner: String,
    city: String,
    zip: String,
    state: String,
    beds: Number,
    baths: Number,
    sqft: Number,
    price: Number,
    status: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Property', PropertySchema);
