var mongoose = require('mongoose');

//Added proper schema for DB structure
var Schema = mongoose.Schema

var PropertySchema = new Schema({
    address1: String,
    address2: String,
    owner: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Property', PropertySchema);
