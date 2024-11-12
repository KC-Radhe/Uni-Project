const router = require('express').Router();
const authController = require('../controller/auth-controller');

router.post('/register', authController.registerUser);

module.exports = router;