const express = require('express');
const router = express.Router();
const cadastroController = require('../controller/cadastroController');

router.get('/cadastro', cadastroController.exibirCadastro);
router.post('/cadastro', cadastroController.cadastrar);

module.exports = router;