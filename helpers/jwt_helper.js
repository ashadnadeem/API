const JWT = require('jsonwebtoken');
const create_error = require('http-errors');

module.exports = {
    signAccessToken: (userId) => {
        return new Promise((resolve, reject) => {
            const payload = {};
            const secret = process.env.ACCESS_TOKEN_SECRET;
            const options = {
                expiresIn: '1m',
                issuer: 'BasicAPI Demo Team',
                audience: userId,
            };
            JWT.sign(payload, secret, options, (err, token) => {
                if(err) reject(create_error.InternalServerError());
                resolve(token);
            });
        });
    }
};