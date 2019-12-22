const { Schema, model } = require('mongoose');

const schema = new Schema({
    foto: {
        type: String,
        // default: 'non disponibile',
        //required: true

    },
    // location: {
    //     type: String,
    //     default: 'non disponibile',
    //     //required: true,

    // },
    // title: {
    //     type: String,
    //     default: 'non disponibile',
    //     //required: true,
    // },
    // meatPrice: {
    //     type: Number,
    //     default: 0,
    //     //required: true,
    // },
    // fishPrice: {
    //     type: Number,
    //     default: 0,
    //     //required: true,
    // },
    // menu: {
    //     type: String,
    //     default: 'non disponibile',
    //     //required: true,
    // },
    // flayer: {
    //     type: String,
    //     default: 'non disponibile',
    //     //required: true,
    // },
})

module.exports = model('MongoModel', schema);