const Project = require('../models/projectModel');

const createProject = async (req, res) => {
    try {
        const { name, description } = req.body;
        const { user } = req;
        const newProject = await Project.create({ name, description, createdBy: user._id });
        res.status(201).json({
            success: true,
            message: "Project Created Successfully",
            data: {
                id: newProject._id,
                name: newProject.name,
                description: newProject.description,
                createdBy: newProject.createdBy,
                createdAt: newProject.createdAt,
                updatedAt: newProject.updatedAt,
            }
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Server Internal Error",
            error: err.message
        })
    }
}

const getProjects = async (req, res) => {
    try {
        const { _id } = req.user;
        const projects = await Project.find({ createdBy: _id });
        res.status(200).json({
            success: true,
            message: 'Projects Fetched Successfully!',
            data: projects
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Server Internal Error",
            error: err.message
        })
    }
}

const getProjectById = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user._id;
        const project = await Project.findOne({ _id: id, createdBy: userId });
        if (!project) {
            return res.status(404).json({
                success: false,
                message: 'Project not found or access denied'
            })
        }
        res.status(200).json({
            success: true,
            message: "Project fetched successfully!",
            data: project
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Server Internal Error",
            error: err.message
        })
    }
}

const updateProject = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user._id;
        const { name, description } = req.body;
        const project = await Project.findOne({ _id: id, createdBy: userId });
        if (!project) {
            return res.status(404).json({
                success: false,
                message: 'Project not found or access denied'
            })
        }
        if (name) project.name = name;
        if (description) project.description = description;
        const updatedProject = await project.save();
        res.status(200).json({
            success: true,
            message: "Project Updated successfully!",
            data: updatedProject
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Server Internal Error",
            error: err.message
        })
    }
}

const deleteProject = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user._id;
        const project = await Project.findOneAndDelete({ _id: id, createdBy: userId });
        if (!project) {
            return res.status(404).json({
                success: false,
                message: 'Project not found or access denied'
            })
        }
        res.status(200).json({
            success: true,
            message: "Project delted successfully",
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Server Internal Error",
            error: err.message
        })
    }
}

module.exports = { createProject, getProjects, getProjectById, updateProject, deleteProject }