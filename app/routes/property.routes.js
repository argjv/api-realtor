module.exports = function(app) {

    var properties = require('../controllers/property.controller.js');

    // Create a new Property
    app.post('/properties', properties.create);

    // Retrieve all Properties
    app.get('/properties', properties.findAll);

    // Retrieve a single Property with ethid
    app.get('/properties/:ethid', properties.findOne);

    // Update a Property with ethid
    app.put('/properties/:ethid', properties.update);

    // Delete a Property with ethid
    app.delete('/properties/:ethid', properties.delete);
}