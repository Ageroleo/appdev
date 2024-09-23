const express = require('express');
const router = express.Router();
const con = require('../controller/CONtroller');
router.get('/', con.index);
router.get('/about', con.about);
router.get('/contact', con.contact);
router.get('/faqs', con.faqs);
router.get('/more', con.more);
module.exports = router; 