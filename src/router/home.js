const express = require('express')
const router = express.Router();

const home = require('../../app/controller/Home')

router.get('/creat', home.creat)
router.get('/:id/model', home.model)
router.post('/store', home.store)
router.post('/creatLH', home.creatLH)
// router.post('/:id/delete', home.delete)
// router.post('/:id', home.edit)
router.get('/', home.index);

module.exports = router;

