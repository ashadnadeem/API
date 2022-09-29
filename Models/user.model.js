const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
});

const user = mongoose.model('user', userSchema);
module.exports = user;