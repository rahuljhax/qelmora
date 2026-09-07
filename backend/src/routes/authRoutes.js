const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/authMiddleware')
const { signup, getMe, login, refreshToken, logout, acceptInvite } = require('../controllers/authController');

router.post('/signup', signup);
router.post('/login', login);
router.post('/accept-invite', acceptInvite);
router.post('/refresh-token', refreshToken);
router.post('/logout', logout);
router.get('/me', protect, getMe);

module.exports = router;