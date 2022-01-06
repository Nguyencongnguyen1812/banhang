const loaihang = require('../models/loaihang')
const mathang = require('../models/mathang')
class Loai {
    show(req, res, next) {
        mathang.find({  })
            .populate('loaihang')
            .then(data => {
                data = data.map(data => data.toObject())
                res.render('loai', { data })
            })
            .catch(next)
    }
    test(req, res, next) {
        mathang.find({ name: 'váy xòe hoa 123' })
            .populate('loaihang')
            .then(data => {
                console.log('data', data)
                res.json(data)
            })
            .catch(next)
    }
    index(req, res, next) {
        loaihang.find({ loai: 'quần bò' })
            .populate('mathang')
            .then(data => {
                console.log('data', data)
                res.json(data)
            })
            .catch(next)
    }
}
module.exports = new Loai;
