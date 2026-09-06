const express = require('express');
const router = express.Router();
const { sendInvitation, verifyInvitation } = require('../controllers/invitationController');

router.post('/send', sendInvitation);
router.get('/verify', verifyInvitation);

module.exports = router;