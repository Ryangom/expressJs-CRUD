const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const userSchema = require('../Database_schema/userSchema');
const userModel = new mongoose.model("user", userSchema);


// get all users
router.get('/', async (req, res) => {
    // await userModel.find({}, (err, data) => {
    //     if (err) {
    //         res.status(500).send(err);
    //     } else {
    //         res.status(200).send(data);
    //     }
    // });

    userModel.find({}, function (err, data) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    }).clone().catch(function (err) { console.log(err) })

});

// get a single user
// router.get('/:id', async (req, res) => {
//     res.send('get single user');
// });

// create a new user
router.post('/', async (req, res) => {
    const user = new userModel(req.body);
    await user.save((err, user) => {
        if (err) {
            res.status(500).json({ error: "There was a server error" });
        } else {
            res.status(200).json({ message: "Data inseted succesfully" });
        }
    })
});


// update a user
router.put('/:id', async (req, res) => {
    res.send('User updated');
});


// delete a user
router.delete('/:id', async (req, res) => {
    res.send('User deleted');
});



// export the router
module.exports = router;