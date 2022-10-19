const Artist = require('../models/Artist');

//! For ‘/’ endpoint: 

const getArtists = async (req, res, next) => {

/*     if (Object.keys(req.query).length) {
        const {
            firstName,
            lastName,
            gender
        } = req.query

        const filter = [];
        if (firstName) filter.push(firstName);
        if (lastName) filter.push(lastName);
        if (gender) filter.push(gender);

        for (let i = 0; i < filter.length; i++) {
            console.log(`Searching artist by: ${filter[i]}`)
        }
    } */

    try {
        const result = await Artist.find();
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(result)
    }
    catch (err) {
        throw new Error(`Error retrieving Song: ${err.message}`);
    }

}

const postArtist = async (req, res, next) => {
    try {
        const result = await Artist.create(req.body);
        res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json(result)
    }
    catch (err) {
        throw new Error(`Error retrieving Song: ${err.message}`);
    }

}

const deleteArtists = async (req, res, next) => {
    try {
        await Artist.deleteMany();
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json({ success: true, msg: 'deleted all artist'})
    }
    catch (err) {
        throw new Error(`Error retrieving artist: ${err.message}`);
    }
}


//! For artistId endpoint: 

const getArtist = async (req, res, next) => {
    try {
        const result = await Artist.findById(req.params.artistId);
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(result)
    }
    catch (err) {
        throw new Error (`Error retrieving artist with ID of: ${req.params.artistId} ${err.message}`);
    }
}

const updateArtist = async (req, res, next) => {
    try {
        const result = await Artist.findByIdAndUpdate(req.params.artistId, {
            $set: req.body

        }, {new: true});
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(result)
    }
    catch (err) {
        throw new Errpr(`Error updating artist with ID of: ${req.params.artistId} ${err.message}`);
    }
}


const deleteArtist = async (req, res, next) => {
    try {
        await Artist.findByIdAndDelete(req.params.artistId);
        res 
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json({ success: true, msg: `delete artist with id: ${req.params.artistId}`})
    }
    catch (err) {
        throw new Error(`Error deleting artist with ID of: ${req.params.artistId} ${err.message}`);
    }
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json( { success: true, msg: `Deleted  the Artist with id: ${req.params.artistId}`}) // ${req.params.songId}
}

module.exports = {
    
    getArtists,
    postArtist,
    deleteArtists,
    getArtist,
    updateArtist,
    deleteArtist

}