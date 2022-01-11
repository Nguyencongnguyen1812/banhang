const use = require('../models/use')
const loaihang = require('../models/loaihang')
const mathang = require('../models/mathang')
const giohang = require('../models/giohang')
const { monggoosetoObiect } = require('./mongoose')
const { utilmoogosetoObjec } = require('./mongoose')

class oder {
    index(req, res, next) {
        res.render('admin')
    }
    // Qlgiohang(req, res, next) {
    //     giohang.find({})
    //         .populate('mathang')
    //         .then( 
    //            data =>{
    //                 data = data.map(data => data.toObject())
    //                 res.render('admin', { data })
    //                 console.log(data)
    //            }
               
    //         )
    //         .catch(next)
    // }
    Qlgiohang(req, res, next) {
        giohang.find({})
            .populate('id_mathang')
            .then(data => {
                data = data.map(data => data.toObject())
                res.render('admin', { data })
                
            })
            .catch(next)
    }
//     index(req, res, next) {
//         mathang.find({})
//             .populate('loaihang')
//             .then(mathang => {
//                 mathang = mathang.map(mathang => mathang.toObject())
//                 res.render('admin', { mathang })

//             })
//             .catch(next)
    
    
// }
}

module.exports = new oder;