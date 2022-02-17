const express = require('express');
const router = express.Router();
const passport = require('passport');
const homeController = require('../controllers/homeController');

const habbitsController = require('../controllers/habbitsController');

router.get('/',passport.checkAuthentication,homeController.home);

// including users and habbit routes in main route file
router.use('/users',require('./users'));
router.use('/habbits',require('./habbits'));


module.exports = router;