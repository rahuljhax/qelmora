const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    description: {
        type: String,
    },
    priority: {
        type: String,
        enum: ['Low', 'Medium', 'High'],
        required: [true, 'Priority is required']
    },
    status: {
        type: String,
        enum: ['todo', 'in-progress', 'done'],
        required: [true, 'Status is required'],
    },
    progress: {
        type: Number,
    },
    type: {
        type: String,
        enum: ['bug', 'ui', 'improvement'],
        required: [true]
    },
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        required: [true, 'Project id is required']
    }
}, { timestamps: true })

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;