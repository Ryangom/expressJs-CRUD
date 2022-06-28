const express = require('express');
const router = express.Router();

// get all users
router.get('/', async (req, res) => {
    res.send('get all users');
});

// get a single user
router.get('/:id', async (req, res) => {
    res.send('get single user');
});

// create a new user
router.post('/', async (req, res) => {
    res.send('User created');
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