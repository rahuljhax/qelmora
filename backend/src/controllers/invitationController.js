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


module.exports = { sendInvitation };