const mathang = require('../models/mathang')
const loaihang = require('../models/loaihang')
const giohang = require('../models/giohang')
const { monggoosetoObiect } = require('./mongoose')
const mongoose = require('mongoose')
class admin {
    index(req, res, next) {
            mathang.find({})
                .populate('loaihang')
                .then(mathang => {
                    mathang = mathang.map(mathang => mathang.toObject())
                    res.render('admin', { mathang })

                })
                .catch(next)
        
        
    }
     creatLH(req, res, next) {
        res.json( req.body )
        console.log(req.body )
        // console.log(req.params)
        // const Loaihang = new loaihang(req.body)
        // Loaihang.save()
        //     .then(
        //         () => res.redirect('back')
        //     ).catch(next)
    }
    creat(req, res, next) {
        loaihang.find({})
            .then(loaihang => {
                loaihang = loaihang.map(loaihang => loaihang.toObject())
                res.render('creat', { loaihang })

            })
            .catch(next)
    }
    store(req, res, next) {
        
        const data = req.body;
        data.loaihang = req.body.loaihang;
        if (!mongoose.Types.ObjectId.isValid(data.loaihang)) {
            data.loaihang = data.loaihang.replace('');
        }
        const Mathang = new mathang(data)
        // console.log(req.body)
        // res.json(req.body)
        Mathang.save()
            .then(
                () => res.redirect('/admin')
            ).catch(next)
    }
   
    delete(req, res, next) {

        mathang.deleteOne({ _id: req.params.id })
            .then(
                () => res.redirect('back')
            ).catch(next)
    }
    model(req, res, next) {
        mathang.findById({ _id: req.params.id }, req.body)
            .populate('loaihang')
            .then(mathang => res.render('model', { mathang: monggoosetoObiect(mathang) }))

            .catch(next)
    }
    edit(req, res, next) {
        console.log(req.body)
        mathang.updateOne({ _id: req.params.id }, req.body)
            .then(
                () => res.redirect('/admin')
            ).catch(next)
    }
    Qlloaihang(req, res, next) {
        loaihang.find({})
            .then(loaihang => {
                loaihang = loaihang.map(loaihang => loaihang.toObject())
                res.render('admin', { loaihang })

            })
            .catch(next)
    }
    deleteLH(req, res, next) {

        loaihang.deleteOne({ _id: req.params.id })
        
            .then(
                () => res.redirect('back')
            ).catch(next)
    }
    // creatLH(req, res, next) {
        
    //     const Loaihang = new loaihang({ loai: req.params})
    //     console.log(req.params)
    //     res.json(req.body)
    //     // Loaihang.save()
    //     //     .then(
    //     //         () => res.redirect('back')
    //     //     ).catch(next)
    // }
   



}

module.exports = new admin;