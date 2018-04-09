require('dotenv').config({ path: './variables.env' });

var express = require('express');
var bodyParser = require('body-parser');

// create express app
var app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', process.env.FRONTEND_URL);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

var router = express.Router();   	//get an instance of the express Router

// define a simple route
router.get('/', function(req, res){
    res.json({"message": "Realtor REST api"});
});

//prefix all routes with /api
app.use('/api', router);

require('./app/routes/user.routes.js')(app);
require('./app/routes/property.routes.js')(app);
require('./app/routes/offer.routes.js')(app);

//define port in case we need to change it later
var port = process.env.PORT || 3000;        // set our port

// listen for requests
app.listen(port)

console.log('Server is listening on port ' + port);


// Configuring the database
var dbConfig = require('./config/database.config.js');
var mongoose = require('mongoose');

mongoose.connect(dbConfig.url, function(err, db) {
    if (err) throw err;
    console.log('Database Up!');
});

mongoose.connection.on('error', function() {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

mongoose.connection.once('open', function() {
    console.log("Successfully connected to the database");
})
