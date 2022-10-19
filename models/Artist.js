const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
    firstName: {  //! APPLICABLE TO CHANGES
        type: String,
        required: [true, 'Please add a first name'] 
    },
    lastName: { //! APPLICABLE TO CHANGES
        type: String,
        required: [true, 'Please add a last name']
    },    
    gender: { //! APPLICABLE TO CHANGES
        type: String,
        required: [true, 'Please add a gender'],
        enum: [
            'Male',
            'Female'
        ]
    }

}, {
    timestamps: true
})

module.exports = mongoose.model('Artist', ArtistSchema);