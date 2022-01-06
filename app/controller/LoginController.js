const use = require ('../models/use')
const loaihang = require('../models/loaihang')
class home {
    index(req, res, next) {
        res.render('login', { layout: 'login' })
    }
    show(req, res, next) {
        loaihang.find({})
            .then(loaihang => {
                loaihang = loaihang.map(loaihang => loaihang.toObject())
                res.render('login', { loaihang })

            })
            .catch(next)
    }
}

module.exports = new home;