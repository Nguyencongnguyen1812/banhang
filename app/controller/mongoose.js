module.exports = {
    utilmoogosetoObject: function (monggoose) {
        return monggoose.map(mongoose => monggoose.toObject())
    },
    monggoosetoObiect: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    },
}