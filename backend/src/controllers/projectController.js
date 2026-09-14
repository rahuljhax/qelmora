const Project = require('../models/projectModel');

const createProject = async (req, res) => {
    try {
        const { name, description, assignee } = req.body;

        const { user } = req;

        const newProject = await Project.create({ name, description, assignee, organization: user.organization, createdBy: user._id });

        res.status(201).json({
            success: true,
            message: "Project Created Successfully",
            data: {
                id: newProject._id,
                name: newProject.name,
                description: newProject.description,
                assignee: newProject.assignee,
                organization: newProject.organization,
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
        const { _id, role } = req.user;
        if (role !== 'admin') {
            return res.status(400).json({
                success: false,
                message: "You dont have permission to access this resource",
            })
        }
        const projects = await Project.find({ createdBy: _id });

        const filteredProjects = projects.map(project => ({
            id: project.id,
            name: project.name,
            description: project.description,
            assignee: project.assignee,
            createdBy: project.createdBy,
            organization: project.organization,
            createdAt: project.createdAt,
        }))
        res.status(200).json({
            success: true,
            message: 'Projects Fetched Successfully!',
            data: filteredProjects
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
            data: {
                id: project.id,
                name: project.name,
                description: project.description,
                assignee: project.assignee,
                createdBy: project.createdBy,
                organization: project.organization,
                createdAt: project.createdAt,
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

const updateProject = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user._id;
        const { name, description, assignee } = req.body;
        const project = await Project.findOne({ _id: id, createdBy: userId });
        if (!project) {
            return res.status(404).json({
                success: false,
                message: 'Project not found or access denied'
            })
        }
        if (name) project.name = name;
        if (description) project.description = description;
        if (assignee) project.assignee = assignee;

        const updatedProject = await project.save();
        res.status(200).json({
            success: true,
            message: "Project Updated successfully!",
            data: {
                id: updatedProject._id,
                name: updatedProject.name,
                description: updatedProject.description,
                assignee: updatedProject.assignee,
                organization: updatedProject.organization,
                createdBy: updatedProject.createdBy,
                createdAt: updatedProject.createdAt,
                updatedAt: updatedProject.updatedAt,
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

const deleteProject = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user._id;
        const role = req.user.role;
        if (role === 'member') {
            return res.status(400).json({
                success: false,
                message: "You dont have permission to access this resource",
            })
        }
        const findCondition = {
            _id: id,
            ...(role === 'admin' && { createdBy: userId })
        }
        const project = await Project.findOneAndDelete(findCondition);

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