const express = require('express');
const router = express.Router();
const {registerLawyer, updateLawyerProfile} = require('../controllers/lawyerController');

router.post('/register',registerLawyer);
router.post('/update/:id',updateLawyerProfile)

module.exports = router;
