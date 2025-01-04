const express = require('express');
const router = express.Router();
const {login, register, currentUser } = require("../controllers/authController");
const authMiddleware = require('../middleware/authMiddleware');

router.post('/register', register);
router.post('/login', login);
router.get('/current',authMiddleware, currentUser);
module.exports = router;