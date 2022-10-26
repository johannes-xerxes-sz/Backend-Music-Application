const Song = require('../models/Song');

//! For ‘/’ startpoint: 

const getSongs = async (req, res, next) => {

    const filter = {};
    const options = {};
    if (Object.keys(req.query).length) {
        const {
            songTitle,
            artist,
            genre,
            limit,
            sortByArtist
        } = req.query

        if (songTitle) filter.songTitle = true;
        if (artist) filter.artist = true;
        if (genre) filter.genre = true;

        if (limit) options.limit = limit;
        if (sortByArtist) options.sort = {
            artist: sortByArtist === 'asc' ? 1 : -1
        }
    }

    try {
        const songs = await Song.find({}, filter, options);
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(songs)
    }
    catch (err) {
        throw new Error(`Error retrieving Song: ${err.message}`);
    }



}

const postSong = async (req, res, next) => {
    try {
        const song = await Song.create(req.body);
        res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json(song)
    }
    catch (err) {
        throw new Error(`Error retrieving Songs: ${err.message}`);
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
        throw new Error(`Error deleting Songs: ${err.message}`);

    }

}
//! For ‘/’ endpoint: 
//! For SongId startpoint: 

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
        .json(result) 
    }
    catch (err) {
        throw new Error(`Error updating song with id of: ${req.params.songId} ${err.message}`);
    }

}

const deleteSong = async  (req, res, next) => {
    try {
        await Song.findByIdAndDelete(req.params.songId);

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json( { success: true, msg: `Deleted the Song with id: ${req.params.songId}`}) 
    }
    catch (err) {
        throw new Error(`Error deleting Song with id of: ${req.params.songId} ${err.message}`);
    }

}
//! For SongId endpoint: 

//! For '/:songId/ratings' startpoint

const getSongRatings = async (req, res, next) => {
    try {
        const song = await Song.findById(req.params.songId);
        const ratings = song.ratings;

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(ratings)

    }
    catch (err) {
        throw new Error (`Error retrieving all ratings: ${err.message}`)
    }
}

const postSongRating = async (req, res, next) => {
    try {
        const song = await Song.findById(req.params.songId);
        song.ratings.push(req.body);
        
        const result = await song.save();
        res
        .status(201) //need_clarify
        .setHeader('Content-Type', 'application/json')
        .json(result)
    }
    catch (err) {
        throw new Error(`Error posting a Song rating: ${err.message}`)
    }
}

const deleteSongRatings = async (req, res, next) => {
    try {
        const song = await Song.findById(req.params.songId);
        song.ratings = [];
        await song.save();

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json({ success: true, msg: `deleted all ratings`})
    }
    catch (err) {
        throw new Error(`Error deleting all ratings: ${err.message}`)
    }
}

//! For '/:songId/ratings' endpoint
//! For '/:songId/ratings/:ratingId' startpoint

const getSongRating = async (req, res, next) => {
    try {
        const song = await Song.findById(req.params.songId)
        const rating = song.ratings.find(rating => (rating._id).equals(req.params.ratingId))
        if(!rating) {rating = {success:false, msg: `No rating found with rating id: ${req.params.ratingId}`}}
        res
        .set(200)
        .setHeader('Content-Type', 'application/json')
        .json(rating)

    } 
    catch (err) {
        throw new Error (`Error retrieving raiting with id: ${req.params.ratingId}, ${err.message}`)
    }
}

const updateSongRating = async (req, res, next) => {
    try {
        const song = await Song.findById(req.params.songId);
        let rating = song.ratings.find(rating => (rating._id).equals(req.params.ratingId))

        if(rating) {
            const ratingIndexPosition = song.ratings.indexOf(rating)
            song.ratings.splice(ratingIndexPosition, 1, req.body);
            rating = song.ratings[ratingIndexPosition]
            await song.save();
        }
        else {
            rating = {success: false, msg: `No rating found with the id: ${req.params.ratingId}`}
        }

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(rating);
    }
    catch (err) {
        throw new Error (`Error updating song with Id: ${req.params.ratingId}:${err.message}`)
    }
}

const deleteSongRating = async (req, res, next) => {
    try {
    let song = await Song.findById(req.params.songId);
    let rating = song.ratings.find(rating => (rating._id).equals(req.params.ratingId));
        if (rating) {
            const ratingIndexPosition = song.ratings.indexOf(rating);
            song.ratings.splice(ratingIndexPosition, 1);
            rating = {success: true, msg: `Rating with Id: ${req.params.ratingId} deleted`}
            await song.save();

        }
        else {
            rating = {success: false, msg: `No rating found with the id: ${req.params.ratingId}`}
        }

    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json(rating)

    }
    catch (err) {
        throw new Error (`Error deleting rating with Id: ${req.params.ratingId} : ${err.message}`)
    }
}


//! For '/:songId/ratings/:ratingId' endpoint



module.exports = {

    getSongs,
    postSong,
    deleteSongs,
    getSong,
    updateSong,
    deleteSong,
    getSongRatings,
    postSongRating,
    deleteSongRatings,
    getSongRating,
    updateSongRating,
    deleteSongRating

}