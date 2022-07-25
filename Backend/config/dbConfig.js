const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect("mongodb://0.0.0.0:27017/My_app", {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }, (err) => { 
        if (err) console.log(err); 
    });
    console.log('Connected to MongoDB');
}

module.exports = connectDB;