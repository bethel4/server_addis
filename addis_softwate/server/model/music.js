const mongoose = require('mongoose');

const musicSchema = new mongoose.Schema({
    title:{
        type: 'string',
        required: true
    },
    artist:{
        type: 'string',
        required: true
    },
    album:{
        type: 'string',
        required: true
    },
    genre:{
        type: ['string'],
        required: true
    }
    })

    module.exports = mongoose.model('Music',musicSchema);