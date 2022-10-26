const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
    firstName: {  
        type: String,
        required: true,
        maxLength: 10
    },
    lastName: { 
        type: String,
        required: true,
        maxLength: 10
    },    
    genre: { 
        type: String
    },
    image: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Artist', ArtistSchema);