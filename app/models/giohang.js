const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const mathang = require('./mathang');

const Gio = new mongoose.Schema(
    {
        soluong:'string',
        id_use:'string',
        id_mathang: {
            type: mongoose.Schema.Types.ObjectId, 
            required: false,
            ref: 'mathang',
    },

    },
    {
        timestamps: true
    },
    {
        collection: 'giohang'
    }
)
module.exports = mongoose.model('giohang', Gio)