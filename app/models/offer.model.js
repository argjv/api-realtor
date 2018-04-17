var mongoose = require('mongoose');

var Schema = mongoose.Schema

var OfferSchema = new Schema({
    owner: String,
    offer: Number,
    ethid: String,
    status: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Offer', OfferSchema);
