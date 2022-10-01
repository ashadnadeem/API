// Import the modules from package
const express = require('express');
const router = express.Router();
const create_error = require('http-errors');
// Import the Data Models
const User = require('../Models/user.model');
// Import the validation schema
const {authSchema} = require('../helpers/validation_schema');

// Register Route
router.post('/register', async(req, res, next) => {
    try {
        // Validate the email and password
        const validReq = await authSchema.validateAsync(req.body);
        console.log(validReq);
        // Check if user already exists
        const doesExist = await User.findOne({email: validReq.email});
        if(doesExist) throw create_error.Conflict(`A user with ${validReq.email} is already registered`);
        
        // Create new user
        const user = User(validReq);
        const saved = await user.save();

        res.send(saved);
    } catch (error) {
        // Check if error is from joi validation then send unaccessible property error
        if(error.isJoi === true) error.status = 422;
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