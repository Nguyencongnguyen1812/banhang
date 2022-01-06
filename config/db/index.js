const mongoose = require('mongoose');

async function connect() {
    try{
        await mongoose.connect('mongodb://localhost:27017/config');
        console.log('kết nối thành công')
    }  
    catch(err){
        console.log("thất bại")

    }
}
module.exports = { connect };