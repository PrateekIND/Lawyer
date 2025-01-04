const express = require('express');
const router = express.Router();
const { registerFirm, updateFirmProfile, addLawyer, removeLawyer} = require('../controllers/firmController');


router.post('/register', registerFirm);
router.patch("/addlawyer/:id", addLawyer);
router.patch('/update/:id', updateFirmProfile );
router.patch("/remove/:id", removeLawyer)

module.exports = router;
