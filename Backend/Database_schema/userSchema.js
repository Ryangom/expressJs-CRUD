const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    address: String,
    phone: String
});


module.exports = mongoose.model('users', userSchema);