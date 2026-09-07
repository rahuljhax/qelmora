const User = require('../models/userModel');
const { generateAccessToken, generateRefreshToken } = require('../utils/generateToken');
const jwt = require('jsonwebtoken');
const Invitation = require('../models/invitationModel');
const Organization = require('../models/organizationModel');

const signup = async (req, res) => {
    try {
        const { name, email, password, role, organization } = req.body;

        // Validate Data 
        if (!name || !email || !password || !role || !organization) {
            return res.status(400).json({
                success: false,
                message: 'Please provide all fields: name, email, password, role, organization'
            })
        }

        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'User already exist with this email'
            })
        }

        // Create Organization 
        const newOrg = await Organization.create({
            name: organization
        })

        // Create new user in the database 
        const newUser = await User.create({
            name, email, password, role, organization: newOrg._id
        });

        // Generating the token 
        const accessToken = generateAccessToken(newUser._id);
        const refreshToken = generateRefreshToken(newUser._id);

        newUser.refreshToken = refreshToken;
        await newUser.save();

        // Setting the refresh token in the cookie
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        // Send Successfull Message after creating the user
        res.status(201).json({
            success: true,
            message: 'User Registered Successfully!',
            accessToken,
            data: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                role: newUser.role,
                organization: newUser.organization,
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
        // Generating the token
        const accessToken = generateAccessToken(user._id);
        const refreshToken = generateRefreshToken(user._id);

        user.refreshToken = refreshToken;
        await user.save();

        // Setting the refresh token in the cookie
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        res.status(200).json({
            success: true,
            message: 'User Logged in Successfully',
            accessToken,
            data: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                organization: user.organization,
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

const acceptInvite = async (req, res) => {
    try {
        const { token, name, password } = req.body;
        const existingInvitation = await Invitation.findOne({ token: token });
        if (!existingInvitation) {
            return res.status(400).json({
                success: false,
                message: 'Invalid token'
            })
        }
        if (existingInvitation.status === 'accepted') {
            return res.status(400).json({
                success: false,
                message: 'Invitation already used'
            })
        }
        if (Date.now() > existingInvitation.expiresAt) {
            existingInvitation.status = 'expired';
            await existingInvitation.save();
            return res.status(400).json({
                success: false,
                message: 'Expired token'
            })
        }
        const newUser = await User.create({
            name,
            email: existingInvitation.email,
            password,
            organization: existingInvitation.organization,
            role: existingInvitation.role
        })

        existingInvitation.status = 'accepted';
        await existingInvitation.save();

        res.status(201).json({
            success: true,
            message: 'User onboarded successfully, Please login now',
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

const refreshToken = async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) {
            return res.status(401).json({
                success: false,
                message: 'Refresh token required'
            })
        }
        const { userId } = jwt.verify(refreshToken, process.env.JWT_SECRET);
        const user = await User.findById(userId);

        if (!user || refreshToken !== user.refreshToken) {
            return res.status(403).json({
                success: false,
                message: 'Invalid or revoked refresh token'
            })
        }
        const newAccessToken = generateAccessToken(user._id);

        res.status(200).json({
            success: true,
            message: 'Refresh token sent successfully!',
            accessToken: newAccessToken
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: err.message
        })
    }
}

const logout = async (req, res) => {
    try {
        res.clearCookie('refreshToken');
        res.status(200).json({
            success: true,
            message: 'Logged out successfully'
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: err.message
        })
    }
}

const getMe = async (req, res) => {
    try {
        const { user } = req;
        res.status(200).json({
            success: true,
            message: 'User data fetched successfully!',
            data: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                organization: user.organization
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
    signup, login, acceptInvite, refreshToken, logout, getMe
}