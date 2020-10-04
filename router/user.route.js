'use strict'
const router = require('express').Router()
const userController = require('../pages/user/controller/user.controller');
const userMiddleWare= require('../middleware/user.role');
const contactController = require('../pages/contact/controller/contact.controller');
router.get('/users', userMiddleWare.userLoginTokenVerified, userController.getAllUser);
router.post('/register', userController.createLocalUser);
router.post('/login', userController.login);
router.put('/update/profile', userMiddleWare.userLoginTokenVerified, userController.updateUserInfo);
router.post('/contact-us', contactController.createContactUs);
router.get('/contact-us', userMiddleWare.userLoginTokenVerified, contactController.loadAllContactUs);
module.exports = router;