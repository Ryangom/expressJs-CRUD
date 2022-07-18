const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: String,
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