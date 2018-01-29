module.exports = function(app) {

    var properties = require('../controllers/property.controller.js');

    // Create a new Property
    app.post('/properties', properties.create);

    // Retrieve all Properties
    app.get('/properties', properties.findAll);

    // Retrieve a single Property with propertyId
    app.get('/properties/:propertyId', properties.findOne);

    // Update a Property with propertyId
    app.put('/properties/:propertyId', properties.update);

    // Delete a Property with propertyId
    app.delete('/properties/:propertyId', properties.delete);
}