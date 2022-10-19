const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
    userName: {  //! APPLICABLE TO CHANGES
        type: String,
        unique: true,
        required: [true, 'Please add a user name!'],
        maxLength: [10, 'User name can not be more than 10 characters']
    },
    age: { //! APPLICABLE TO CHANGES
        type: Number,
        required: true,
        min: 13
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