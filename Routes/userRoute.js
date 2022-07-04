const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const userSchema = require('../Database_schema/userSchema');
const userModel = new mongoose.model("user", userSchema);


// get all users
router.get('/', async (req, res) => {
    userModel.find({}, function (err, data) {
        if (err) {
            res.status(500).send(err);
        } else {
            const count = data.length;
            userInfo = {
                count: count,
                data: data
            }
            res.send(userInfo);
        }
    });
});

// get a single user
router.get('/:id', async (req, res) => {
    userModel.findById(req.params.id, function (err, data) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });
});

// create a new user
router.post('/', async (req, res) => {
    const user = new userModel(req.body);
    await user.save((err, user) => {
        if (err) {
            res.status(500).json({ message: "error" });
        } else {
            res.status(200).json({ message: "success" });
        }
    })
});


// update a user
router.put('/:id', async (req, res) => {

});


// delete a user
router.delete('/delete/:id', async (req, res) => {
    userModel.deleteOne({ _id: req.params.id }, function (err, data) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send({ message: "success" });
        }
    });
});



// export the router
module.exports = router;