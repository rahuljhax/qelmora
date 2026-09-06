const Invitation = require('../models/invitationModel');
const crypto = require('crypto');

const sendInvitation = async (req, res) => {
    try {
        const { email, role, invitedBy, organization } = req.body;
        if (!email || !role || !invitedBy || !organization) {
            return res.status(400).json({
                success: false,
                message: 'All fields required : email, role, invitedBy, organization'
            })
        }
        const token = crypto.randomBytes(32).toString('hex');
        const newInvitation = await Invitation.create({
            email,
            role,
            invitedBy,
            organization,
            status: 'pending',
            token,
            expiresAt: Date.now() + 7 * 24 * 60 * 60 * 1000

        });
        res.status(201).json({
            success: true,
            message: 'Invitation sent successfully',
            url: `http://localhost:3000/accept-invite?token=${newInvitation.token}`,
            data: newInvitation
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
    }
}

const verifyInvitation = async (req, res) => {
    try {
        const { token } = req.query;
        const existingInvitation = await Invitation.findOne({ token: token });
        if (!existingInvitation || Date.now() > existingInvitation.expiresAt) {
            if (existingInvitation) {
                existingInvitation.status = 'expired';
                await existingInvitation.save();
            }
            return res.status(400).json({
                success: false,
                message: 'Invalid or expired token'
            })
        }
        res.status(200).json({
            success: true,
            message: 'Token verified successfully',
            data: {
                email: existingInvitation.email,
                role: existingInvitation.role,
                organization: existingInvitation.organization,
            }
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}


module.exports = { sendInvitation, verifyInvitation };