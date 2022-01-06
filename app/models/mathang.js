const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const loaihang = require('./loaihang')


const Mathang = new Schema(
    {
        name: 'string',
        soluong: 'string',
        img: 'string',
        gia: 'string',
        loaihang: { type: mongoose.Schema.Types.ObjectId, required: false, ref: 'loaihang' },

    },
    {
        timestamps: true
    },
    {
        collection: 'mathang'
    }
)

module.exports = mongoose.model('mathang', Mathang)