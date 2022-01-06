const express = require('express')
const router = express.Router();

const Login = require('../../app/controller/LoginController')

router.get('/', Login.index);
router.get('/', Login.show);


module.exports = router;

