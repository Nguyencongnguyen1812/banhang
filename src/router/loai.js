const express = require('express')
const router = express.Router();

const loai = require('../../app/controller/loaiController')

router.get('/index', loai.index);
router.get('/', loai.show);

module.exports = router;

