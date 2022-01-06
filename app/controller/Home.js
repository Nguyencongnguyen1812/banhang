const mathang = require('../models/mathang')
const loaihang = require('../models/loaihang')
const { monggoosetoObiect } = require('./mongoose')
const { utilmoogosetoObject } = require('./mongoose')
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
        mathang.findById({ _id: req.params.id }, req.body )
            .then(mathang => res.render('chitiet', { mathang: monggoosetoObiect(mathang) }))

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
        console.log(req.body)
        const Loaihang = new loaihang(req.body)
        Loaihang.save()
            .then(
                () => res.redirect('/admin/Qlloaihang')
            ).catch(next)
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