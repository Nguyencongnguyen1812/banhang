const express = require('express')
const router = express.Router();

const admin = require('../../app/controller/AdminControllor')
const user = require('../../app/controller/userController')
const oder = require('../../app/controller/oderController')
const Login = require('../../app/controller/LoginController')
const check = require('../../app/util/check')
router.get('/creat', check.checkLogin, check.checkAdmin,admin.creat)
router.post('/store', check.checkLogin,admin.store)
router.post('/:id/delete', check.checkLogin,admin.delete)
router.get('/:id/model', check.checkLogin, admin.model)
router.post('/:id', check.checkLogin, check.checkAdmin, admin.edit)
router.get('/Qlmathang', check.checkLogin, check.checkAdmin, admin.index);
router.get('/QLloaihang', check.checkLogin, check.checkAdmin, admin.Qlloaihang)
router.post('/:id/deleteLH', check.checkLogin, admin.deleteLH)
router.post('/creatLH', check.checkLogin, check.checkAdmin,admin.creatLH)
router.get('/QLnhansu', check.checkLogin, check.checkAdmin, user.Qlnhansu)
router.get('/QLgiohang', check.checkLogin, oder.Qlgiohang)
router.get('/donhang', admin.donhang)
router.get('/',check.checkLogin, admin.index );



module.exports = router;

