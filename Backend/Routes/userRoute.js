const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const modelUser = require('../Database_schema/userSchema');



// get all users
router.get('/', async (req, res) => {
    modelUser.find({}, function (err, data) {
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
    }).sort({ name: -1 });
});

// get a single user
router.get('/:id', async (req, res) => {
    modelUser.findById(req.params.id, function (err, data) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });
});

// create a new user
router.post('/', async (req, res) => {
    const user = new modelUser({
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        phone: req.body.phone
    });
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
    modelUser.updateOne(
        { _id: req.params.id },
        {
            $set: { name: req.body.name, email: req.body.email, address: req.body.address, phone: req.body.phone }
        } , function (err, data) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(data);
            }
        });
});


// delete a user
router.delete('/delete/:id', async (req, res) => {
    modelUser.deleteOne({ _id: req.params.id }, function (err, data) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send({ message: "success" });
        }
    });
});

// export the router
module.exports = router;