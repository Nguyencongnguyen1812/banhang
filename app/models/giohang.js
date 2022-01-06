const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Gio = new mongoose.Schema(
    {
        name:'string',
        sdt:'string',
        id_use:'string',
        id_mathang: { type: mongoose.Schema.Types.ObjectId, required: false, ref: 'mathang' },

    },
    {
        timestamps: true
    }
)
module.exports = mongoose.model('giohang', Gio)