var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    name: String,
    lastname: String,
    address1: String,
    address2: String,
    nationality: String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);