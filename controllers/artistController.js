const Artist = require('../models/Artist');

const getArtists = async (req, res, next) => {

    const filter = {};
    const options = {};
    if(Object.keys(req.query).length){
        // query parameter
        const {
            firstName,
            lastName,
            genre,
            limit,
            sortByGenre
        } = req.query

        if(firstName) filter.firstName = true
        if(lastName) filter.lastName = true
        if(genre) filter.genre = true

        if(limit) options.limit = limit
        if(sortByGenre) options.sort = {
            genre: sortByGenre === 'asc' ? 1: -1
        }
    }

    try {
        const artists = await Artist.find({ }, filter, options)
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(artists)

    } catch (err) {
        throw new Error(`Error retrieving all artist: ${err.message}`)
    }
    
}

const postArtist = async (req, res, next) => {
    try {
        const artist= await Artist.create(req.body);
        res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json(artist)
    }
    catch (err) {
        throw new Error(`Error retrieving Artist: ${err.message}`);
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
        throw new Error(`Error deleting Artists: ${err.message}`);
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
        throw new Error(`Error updating artist with ID of: ${req.params.artistId} ${err.message}`);
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
    .json( { success: true, msg: `Deleted  the Artist with id: ${req.params.artistId}`}) 
}

module.exports = {
    
    getArtists,
    postArtist,
    deleteArtists,
    getArtist,
    updateArtist,
    deleteArtist

}