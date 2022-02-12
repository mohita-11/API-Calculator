
const mongoose = require('mongoose');

const pollutantSchema = mongoose.Schema({
    pollutantName: String,
    pollutantConcentration: Number
});

const pollutantModel = mongoose.model('Pollutant', pollutantSchema);

module.exports = pollutantModel;