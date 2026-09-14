const express = require('express');
const router = express.Router();
const { getMembers, getMemberById } = require('../controllers/memberController');
const { protect } = require('../middlewares/authMiddleware');
router.get('/', protect, getMembers);
router.get('/:id', protect, getMemberById);
module.exports = router;