const Song = require('../models/Song');

//! For ‘/’ endpoint: 

const getSongs = async (req, res, next) => {

/*     if (Object.keys(req.query).length) {
        const {
            songTitle,
            artist,
            genre
        } = req.query

        const filter = [];
        if (songTitle) filter.push(songTitle);
        if (artist) filter.push(artist);
        if (genre) filter.push(genre);

        for (let i = 0; i < filter.length; i++) {
            console.log(`Searching song by: ${filter[i]}`)
        }
    } */
    try {
        const result = await Song.find();
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(result)
    }
    catch (err) {
        throw new Error(`Error retrieving Song: ${err.message}`);
    }



}

const postSong = async (req, res, next) => {
    try {
        const result = await Song.create(req.body);
        res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json(result)
    }
    catch (err) {
        throw new Error(`Error retrieving Song: ${err.message}`);
    }
    
    
    

}

const deleteSongs = async  (req, res, next) => {
    try {
        await Song.deleteMany();
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json( { success: true, msg:'Deleted all Songs'})
    }
    catch (err) {
        throw new Error(`Error retrieving Song: ${err.message}`);

    }

}


//! For SongId endpoint: 

const getSong = async  (req, res, next) => {
    try {
        const result = await Song.findById(req.params.songId);
        
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json(result)
    }
    catch (err) {
        throw new Error(`Error retrieving song with id of: ${req.params.songId} ${err.message}`);
    }

}

const updateSong = async  (req, res, next) => {
    try {
        const result = await Song.findByIdAndUpdate(req.params.songId, {
            $set: req.body
        }, { new: true});
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(result) // ${req.params.songId}
    }
    catch (err) {
        throw new Error(`Error updating category with id of: ${req.params.songId} ${err.message}`);
    }

}

const deleteSong = async  (req, res, next) => {
    try {
        await Song.findByIdAndDelete(req.params.songId);

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json( { success: true, msg: `Deleted the Song with id: ${req.params.songId}`}) // ${req.params.songId}
    }
    catch (err) {
        throw new Error(`Error deleting category with id of: ${req.params.categoryId} ${err.message}`);
    }

}

module.exports = {

    getSongs,
    postSong,
    deleteSongs,
    getSong,
    updateSong,
    deleteSong

}