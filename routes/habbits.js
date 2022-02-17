const express = require('express');
const router = express.Router();
const passport = require('passport');

const habbitsController = require('../controllers/habbitsController');

// routes for habbits
router.post('/create',habbitsController.create);
router.get('/destroy/:id',passport.checkAuthentication,habbitsController.destroy);
router.get('/status-update', habbitsController.statusUpdate);

module.exports = router;