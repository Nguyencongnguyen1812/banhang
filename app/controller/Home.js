const mathang = require('../models/mathang')
const loaihang = require('../models/loaihang')
const { monggoosetoObiect } = require('./mongoose')
const { utilmoogosetoObject } = require('./mongoose')
const use = require('../models/use')
const gio = require('../models/giohang')
class home {
    index(req, res, next) {
        mathang.find({})
            .populate('loaihang')
            .then(data => {
                data = data.map(data => data.toObject())
                res.render('home', { data })
            })
            .catch(next)
    }
    model(req, res, next) {
        mathang.findOne({ _id: req.params.id } )
            .then(mathang => res.render('chitiet', { mathang: monggoosetoObiect(mathang) }))
            .catch(next)
    }
    loai(req, res, next){
        mathang.find({ loaihang: req.params.id })
            .populate('loaihang')
            .then(data => {
                data = data.map(data => data.toObject())
                res.render('home', { data })
                
            })
            .catch(next)
    }
    creat(req, res, next) {

        res.render('creat')
    }
    store(req, res, next) {
        const Mathang = new mathang(req.body) 
        Mathang.save()
        .then(
            () => res.redirect('/admin')
        ).catch(next)
    }
    creatLH(req, res, next) {
        const Loaihang = new loaihang(req.body)
        Loaihang.save()
            .then(
                () => res.redirect('/admin/Qlloaihang')
            ).catch(next)
    }
    themGio(req, res,next){ 
        const _idmathang = {
            id_mathang: req.params.id,
            id_use: req.data._id,
            tinhtrang: "0"
        }
        console.log('mathang', _idmathang)
        const Gio = new gio(_idmathang)
        
        Gio.save()
            .then(
                () => res.redirect('/')
            ).catch(next)
    }
    gio(req, res, next){
        gio.find({ id_use: req.data._id, tinhtrang: "0" })
            .populate('id_use')
            .populate('id_mathang')
            .then(data => {
                data = data.map(data => data.toObject())
                res.render('gioHang', { data })}
            ).catch(next)

    }
    dathang(req, res, next){
        const tinhtrang = {
            tinhtrang: "dat hang"
        }
        gio.updateOne({_id: req.params}, tinhtrang )
        .then(
             ()=> res.redirect('back'),
             console.log('thanh cong')
        
        )
        .catch(next)
    }
    // edit(req, res, next) {

        
    //     mathang.updateOne({ _id: req.params.id }, req.body )
    //         .then(
    //             () => res.redirect('/')
    //         ).catch(next)
    // }
//     delete(req, res, next) {

//         mathang.deleteOne({ _id: req.params.id })
//             .then(
//                 () => res.redirect('back')
//             ).catch(next)
//     }
 }

module.exports = new home;