const Task = require('../models/taskModel');

const createTask = async (req, res) => {
    try {
        const { title, description, priority, status, type, projectId, progress } = req.body;
        const task = await Task.create({ title, description, priority, status, type, projectId, progress });
        res.status(201).json({
            success: true,
            message: 'Task Created Successfully!',
            data: task
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Server Internal Error",
            error: err.message
        })
    }
}

const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, priority, status, type, projectId, progress } = req.body;
        const task = await Task.findById(id);
        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task Not found",
            })
        }
        if (title) task.title = title;
        if (description) task.description = description;
        if (priority) task.priority = priority;
        if (status) task.status = status;
        if (type) task.type = type;
        if (projectId) task.projectId = projectId;
        if (progress) task.progress = progress;

        const updatedTask = await task.save();
        res.status(200).json({
            success: true,
            message: 'Task updated successfully!',
            data: updatedTask
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Server Internal Error",
            error: err.message
        })
    }
}

const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndDelete(id);
        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task Not found",
            })
        }
        res.status(200).json({
            success: true,
            message: "Task Deleted Successfully",
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Server Internal Error",
            error: err.message
        })
    }
}
const getAllTasks = async (req, res) => {
    try {
        const { id } = req.params;
        const tasks = await Task.find({ projectId: id });
        res.status(200).json({
            success: true,
            message: "All task fetched successfully!",
            data: tasks
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Server Internal Error",
            error: err.message
        })
    }
}
const getTaskById = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findById(id);
        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task Not found",
            })
        }
        res.status(200).json({
            success: true,
            message: "Task Fetched Successfully",
            data: task
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Server Internal Error",
            error: err.message
        })
    }
}
module.exports = { createTask, updateTask, deleteTask, getTaskById, getAllTasks }