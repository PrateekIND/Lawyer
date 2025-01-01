const express = require('express');
const router = express.Router();
const {searchLawyers, getLawyerDetails } = require("../controllers/userController")

router.get('/search', searchLawyers);
router.get('/details/:lawyerId', getLawyerDetails);

module.exports = router;