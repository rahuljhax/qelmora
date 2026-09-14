const User = require('../models/userModel');
const getMembers = async (req, res) => {
    try {
        const { user: { _id, organization, role } } = req;
        if (role !== 'admin') {
            return res.status(400).json({
                success: false,
                message: "You dont have permission to access this resource",
            })
        }
        const allMembers = await User.find({ organization, _id: { $ne: _id } }).select('-password -refreshToken -__v -updatedAt');

        const filteredAllMembers = allMembers.map(member => ({
            id: member._id,
            name: member.name,
            email: member.email,
            role: member.role,
            organization: member.organization,
            createdAt: member.createdAt
        }))

        res.status(200).json({
            success: true,
            message: 'Member fetched successfully',
            data: filteredAllMembers
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: err.message
        })
    }
}

const getMemberById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id).select('-password -refreshToken -__v -updatedAt');
        res.status(200).json({
            success: true,
            message: 'Member fetched successfully',
            data: user
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: err.message
        })
    }
}
module.exports = { getMembers, getMemberById };