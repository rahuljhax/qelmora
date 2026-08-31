const express = require('express');
const { createTask, updateTask, deleteTask, getTaskById, getAllTasks } = require('../controllers/taskController');
const router = express.Router();
const { protect } = require('../middlewares/authMiddleware')
router.post('/', protect, createTask);
router.get('/project/:id', protect, getAllTasks)
router.get('/:id', protect, getTaskById);
router.put('/:id', protect, updateTask);
router.delete('/:id', protect, deleteTask);

module.exports = router;