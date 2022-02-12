
const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
    customerName: String,
    emailAddress: String,
    password: String
});

const customerModel = mongoose.model('Customer', customerSchema);

module.exports = customerModel;