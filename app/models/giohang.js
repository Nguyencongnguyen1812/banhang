const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const mathang = require('./mathang');

const Gio = new mongoose.Schema(
    {
        soluong:'string',
        id_use: {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: 'use',
        },
        id_mathang: {
            type: mongoose.Schema.Types.ObjectId, 
            required: false,
            ref: 'mathang',
        },
        tinhtrang: 'string'

    },
    {
        timestamps: true
    },
    {
        collection: 'giohang'
    }
)
module.exports = mongoose.model('giohang', Gio)