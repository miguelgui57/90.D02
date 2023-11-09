const express = require('express');
const router = express.Router();
const loginController = require('../controller/login.js')

router.get('/login', loginController.exibirLogin);
router.post('/login', loginController.autenticar);

module.exports = router;