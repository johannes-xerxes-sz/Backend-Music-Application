//! For ‘/’ endpoint: 
const { query } = require("express")

const getSongs = (req, res, next) => {

    if (Object.keys(req.query).length) {
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
    }
    res
    .status(201)
    .setHeader('Content-Type', 'application/json')
    .json( { success: true, msg:'Show me all Songs'})
}

const postSong = (req, res, next) => {
    res
    .status(201)
    .setHeader('Content-Type', 'application/json')
    .json( { msg: `create one item with the following fields:
    songTitle: ${req.body.songTitle}
    artist: ${req.body.artist}
    genre: ${req.body.genre}
     `})
}

const deleteSongs = (req, res, next) => {
    res
    .status(201)
    .setHeader('Content-Type', 'application/json')
    .json( { success: true, msg:'Deleted all Songs'})
}


//! For SongId endpoint: 

const getSong = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json( { success: true, msg: `Show the Song with id: ${req.params.songId}`}) // ${req.params.songId}
}

const updateSong = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json( { success: true, msg: `Update the Song with id:${req.params.songId}`}) // ${req.params.songId}
}

const deleteSong = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json( { success: true, msg: `Deleted the Song with id: ${req.params.songId}`}) // ${req.params.songId}
}

module.exports = {

    getSongs,
    postSong,
    deleteSongs,
    getSong,
    updateSong,
    deleteSong

}