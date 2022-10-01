const express = require('express');
const router = express.Router();
const create_error = require('http-errors');
const User = require('../Models/user.model');

// Register Route
router.post('/register', async(req, res, next) => {
    try {
        // Unwrap json body
        const {email, password} = req.body;
        // Check if email and password both are provided
        if(!email || ! password) throw create_error.BadRequest();

        // Check if user already exists
        const doesExist = await User.findOne({email});
        if(doesExist) throw create_error.Conflict(`A user with ${email} is already registered`);
        
        // Create new user
        const user = User({email, password});
        const saved = await user.save();

        res.send(saved);
    } catch (error) {
        next(error);
    }
});

// Login Route
router.post('/login', async(req, res, next) => {
    res.send('Login Route');
});

// refresh token Route
router.post('/refresh_token', async(req, res, next) => {
    res.send('Refresh Token Route');
});

// Logout Route
router.delete('/logout', async(req, res, next) => {
    res.send('Logout Route');
});

module.exports = router;