const express = require('express');
const router = express.Router();
const firmController = require('../controllers/firmController');

// Register a new firm
router.post('/register', firmController.registerFirm);

// Get all firms
router.get('/', firmController.getAllFirms);

module.exports = router;
