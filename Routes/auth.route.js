const express = require('express');
const router = express.Router();

// Register Route
router.post('/register', async(req, res, next) => {
    res.send('Register Route');
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