const express = require('express')
const router = express.Router();

const Login = require('../../app/controller/LoginController')

router.get('/', Login.index);
router.post('/', Login.login);


module.exports = router;

