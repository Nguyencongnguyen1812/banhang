const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const mathang = require('./mathang');

const Don = new mongoose.Schema(
    {
        id_gio: {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: 'giohang',  
        },
    },
    {
        timestamps: true
    },
    {
        collection: 'donhang'
    }
)
module.exports = mongoose.model('donhang', Don)