module.exports = function(app) {

    var offers = require('../controllers/offer.controller.js');
    app.post('/offers', offers.create);
    app.get('/offers', offers.findAll);
    app.get('/offers/:owner', offers.findOne);
    app.put('/offers/:owner', offers.update);
    app.delete('/offers/:owner', offers.delete);
}