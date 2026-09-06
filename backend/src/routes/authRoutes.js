const express = require('express');
const router = express.Router();

const { signup, login, refreshToken, logout, acceptInvite } = require('../controllers/authController');

router.post('/signup', signup);
router.post('/login', login);
router.post('/accept-invite', acceptInvite);
router.post('/refresh-token', refreshToken);
router.post('/logout', logout);

module.exports = router;