const express = require('express');
const { addBenificiery, getBenificieries } = require('../controller/addBenificiery');
const { addDonor, getDonors } = require('../controller/addDonor');

const router = express.Router();

router.get('', (req,res) => { res.send("Hello World") });
router.get('/getrequests', getBenificieries);
router.get('/getdonors', getDonors);

router.post('/addrequest', addBenificiery);
router.post('/addDonor', addDonor);


module.exports = router;
