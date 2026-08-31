const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const protect = async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const user = await User.findById(decoded.userId).select('-password');
            req.user = user;
            next();
        } catch (err) {
            console.error('Auth Error: ', err.message)
            res.status(401).json({
                success: false,
                message: 'Not Authorized, token failed or expired'
            })
        }
    }
    if (!token) {
        res.status(401).json({
            success: false,
            message: 'Not Authorized, no token provided'
        })
    }
}
module.exports = { protect };