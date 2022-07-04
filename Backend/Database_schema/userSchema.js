const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    address: String,
    phone: String,
    date: {
        type: Date,
        default: Date.now
    },
});


module.exports = userSchema;