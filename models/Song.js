const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');

const RatingSchema = new Schema ({
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true,
        validate: (age) => {
            return typeof age === 'number';
        }
    },
    text: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
})

const SongSchema = new Schema({
    songTitle: {
        type: String,
        required: true,
        unique: true,
        maxLength: 20
    },
    artist: {
        type: String,
        required: true,
    },    
    genre: {
        type: String,
        required: true, 
    },
    ratings: [RatingSchema]
}, {
    timestamps: true
})

module.exports = mongoose.model('Song', SongSchema);