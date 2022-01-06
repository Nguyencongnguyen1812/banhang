const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Don = new mongoose.Schema(
    {
        id_gio: 'string',
        id_ten: 'string',
        sdt: 'string',
        diachi: 'string',
        tenkhachhang: 'string',
    },
    {
        timestamps: true
    }
)
module.exports = mongoose.model('donhang', Don)