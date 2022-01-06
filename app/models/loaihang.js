const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Loaihang = new Schema(
    {
        loai: 'string',
    },
    {
        timestamps: true
    },
    {
        collection: 'loaihang'
    }
)



module.exports = mongoose.model('loaihang', Loaihang, "loaihangs");