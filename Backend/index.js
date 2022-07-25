const express = require('express');
const cors = require('cors');
const app = express();
const connectDB = require('./config/dbConfig');
connectDB();

const userRoutes = require('./Routes/userRoute');

//middileware
app.use(express.json());
// use cors to allow cross origin resource sharing
app.use(cors());

//user for users route
app.use('/user', userRoutes);




app.listen(3000, () => {
    console.log('Server is running on port 3000');
});