var express = require('express');
var router = express.Router();
const ctrlMain = require('../controllers/main');

/* GET home page. */
router.get('/', ctrlMain.homelist);
router.get('/index', ctrlMain.homelist);
router.get('/courses', ctrlMain.courseslist);
router.get('/blog', ctrlMain.blog);
router.get('/contact', ctrlMain.contact);
router.get('/single_course', ctrlMain.single_course);
router.get('/sign_in', ctrlMain.sign_in);
router.post('/index', ctrlMain.homelist);
router.get('/edit_profile', ctrlMain.edit_profile);
router.get('/cart', ctrlMain.cart);
router.get('/payment', ctrlMain.payment);

module.exports = router;
