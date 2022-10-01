// Import the modules from package
const express = require('express');
const router = express.Router();
const create_error = require('http-errors');
// Import the Data Models
const User = require('../Models/user.model');

// Get all users
router.get('/getAll', async(req, res, next) => {
    try {
        const user_list = await User.find();
        let result = [];
        user_list.forEach(user => {
            result.push({
                id: user._id,
                email: user.email,
            });
        });

        res.send({users: result});
    } catch (error) {
        next(error);
    }
});

module.exports = router;