const express = require('express');
const router = express.Router();
const { sendInvitation } = require('../controllers/invitationController');

router.post('/send', sendInvitation);

module.exports = router;