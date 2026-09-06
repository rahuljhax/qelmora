const mongoose = require('mongoose');
const invitationSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    role: {
        type: String,
        enum: ['admin', 'manager', 'member'],
        required: [true, 'Role is required'],
        lowercase: true
    },
    invitedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'InvitedBy Id required'],
    },
    organization: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Organization',
        required: [true, 'Organization is required']
    },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'expired'],
        required: [true, 'Status is required'],
        lowercase: true
    },
    token: {
        type: String,
        required: true
    },
    expiresAt: {
        type: Date,
        required: true
    }
}, { timestamps: true });

const Invitation = mongoose.model('Invitation', invitationSchema);
module.exports = Invitation;