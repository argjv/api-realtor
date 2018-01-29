var mongoose = require('mongoose');

var PropertySchema = mongoose.Schema({
    address1: String,
    address2: String,
    owner: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Property', PropertySchema);