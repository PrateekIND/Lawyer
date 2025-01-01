const express = require('express');
const router = express.Router();
const lawyerController = require('../controllers/lawyerController');

router.post('/register',registerLawyer);
router.post('/update',updateLawyerProfile)

module.exports = router;
