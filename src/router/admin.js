const express = require('express')
const router = express.Router();

const admin = require('../../app/controller/AdminControllor')
const user = require('../../app/controller/userController')
router.get('/creat', admin.creat)
router.post('/store', admin.store)
router.post('/:id/delete', admin.delete)
router.get('/:id/model', admin.model)
router.post('/:id', admin.edit)
router.get('/Qlmathang', admin.index);
router.get('/QLloaihang', admin.Qlloaihang)
router.post('/:id/deleteLH', admin.deleteLH)
router.post('/creatLH', admin.creatLH)
router.get('/QLnhansu', user.Qlnhansu)
router.get('/', admin.index);



module.exports = router;

