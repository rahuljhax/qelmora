const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const generateToken = require('../utils/generateToken');
const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Validate Data 
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Please provide all fields: name, email, password'
            })
        }
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'User already exist with this email'
            })
        }

        // Create new user in the database 
        const newUser = await User.create({
            name, email, password
        });

        // Generating the token 
        const token = generateToken(newUser._id);

        // Send Successfull Message after creating the user
        res.status(201).json({
            success: true,
            message: 'User Registered Successfully!',
            token,
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                password: newUser.password
            }
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: err.message
        })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Please provide all fields: email, password'
            })
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                success: false,
                message: 'Invalid Credentials'
            })
        }

        const matchPassword = await user.comparePassword(password);

        if (!matchPassword) {
            return res.status(400).json({
                success: false,
                message: 'Invalid Credentials'
            })
        }
        const token = generateToken(user._id);
        res.status(200).json({
            success: true,
            message: 'User Logged in Successfully',
            token,
            data: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: err.message
        })
    }
}
module.exports = {
    signup, login
}