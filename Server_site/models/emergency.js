const mongoose = require('mongoose');

const emergencySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
});

const Emergency = mongoose.model('Emergency', emergencySchema);

module.exports = Emergency;