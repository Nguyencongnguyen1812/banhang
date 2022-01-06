const use = require('../models/use')
const loaihang = require('../models/loaihang')
const mathang = require('../models/mathang')
const { monggoosetoObiect } = require('./mongoose')
const { utilmoogosetoObjec } = require('./mongoose')

class user {
    index(req, res, next) {
        res.render('admin')
    }
    Qlnhansu(req, res, next) {
        use.find({})
            .then( 
               data =>{
                    data = data.map(data => data.toObject())
                    res.render('admin', { data })
               }
               
            )
            .catch(next)
    }
}

module.exports = new user;