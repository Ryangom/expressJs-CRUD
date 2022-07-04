const express = require('express');
const app = express();
const mongoose = require('mongoose');

const userRoutes = require('./Routes/userRoute');

app.use(express.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


mongoose.connect("mongodb://0.0.0.0:27017/My_app", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log(err);
});

app.use('/user', userRoutes);
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});