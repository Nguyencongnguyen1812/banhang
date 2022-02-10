const express = require('express')
const router = express.Router();

const home = require('../../app/controller/Home')
const check = require('../../app/util/check')

router.get('/creat', home.creat)
router.get('/:id/model', home.model)
router.post('/store', home.store)
router.post('/creatLH', home.creatLH)
router.get('/:id/loai', home.loai)
router.post('/:id/themGio', check.checkLogin, check.checkAdmin, home.themGio)
router.get('/gio', check.checkLogin, check.checkAdmin, home.gio)
router.post('/:_id/dathang', home.dathang)
// router.post('/:id/delete', home.delete)
// router.post('/:id', home.edit)
router.get('/', home.index);

module.exports = router;

