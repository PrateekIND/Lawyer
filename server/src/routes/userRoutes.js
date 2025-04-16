const express = require('express');
const router = express.Router();
const {getFirmsAndLawyers, searchFirmsAndLawyers, getLawyer, getFirm } = require("../controllers/getlawersController");

router.get('/getlawers', getFirmsAndLawyers);
router.get('/search', searchFirmsAndLawyers);
router.get('/lawer/:id', getLawyer);
router.get('/firm/:id', getFirm);
module.exports = router;