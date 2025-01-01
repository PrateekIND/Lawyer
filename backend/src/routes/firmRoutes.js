const express = require('express');
const router = express.Router();
const { registerFirm, updateFirmProfile, addLawyer, removeLawyer} = require('../controllers/firmController');


router.post('/register', registerFirm);
router.post("/addlawyer", addLawyer);
router.get('/update', updateFirmProfile );
router.delete("remove/:id", removeLawyer)

module.exports = router;
