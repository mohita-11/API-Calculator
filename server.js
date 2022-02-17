// modules =================================================
const express = require('express');
const app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
app.use(bodyParser.json());


// set our port
const port = 3000;
// configuration ===========================================

// config files
var db = require('./config/db');
console.log("connecting--", db);
mongoose.connect(db.url); //Mongoose connection created
// frontend routes =========================================================
app.get('/', (req, res) => res.send('Welcome to Tutorialspoint!'));

//defining route
app.get('/tproute', function (req, res) {
    res.send('This is routing for the application developed using Node and Express...');
});

// sample api route
// grab the customer model we just created
var Customer = require('./api/models/customer');


/*app.get('/api/customers', function (req, res) {
    // use mongoose to get all customers in the database
    Customer.find(function (err, customers) {
        // if there is an error retrieving, send the error.
        // nothing after res.send(err) will execute
        if (err)
            res.send(err);
        res.json(customers); // return all customers in JSON format
    });
});*/

//POST customer details
app.post('/api/customers/send', function (req, res) {
    var customer = new Customer(); // create a new instance of the student model
    customer.customerName = req.body.customerName; // set the student name (comes from the request)
    customer.emailAddress = req.body.emailAddress;
    customer.password = req.body.password;
    customer.save(function (err) {
        if (err)
            res.send(err);
        res.json({ message: 'customer created!' });
        
    });
});


var Pollutant = require('./api/models/pollutant');
var AqiCalculator = require('./api/calculator/aqi.calculator');

//POST pollutant details
app.post('/api/pollutants/send', function (req, res) {
    var pollutant = new Pollutant(); // create a new instance of the student model
    pollutant.pollutantName = req.body.pollutantName; // set the student name (comes from the request)
    pollutant.pollutantConcentration = req.body.pollutantConcentration;

    var aqi = AqiCalculator(pollutant.pollutantConcentration);

    pollutant.save(function (err) {
        if (err)
            res.send(err);
        res.json({ message: `aqi is ${aqi}` });
      
    });
});




// startup our app at http://localhost:3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`));