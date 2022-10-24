const express = require('express');
const router = express.Router();
const {
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

} = require('../controllers/songController');
const reqRecievedLogger = require('../middlewares/reqRecievedLogger')
const {songValidator} = require('../middlewares/utils/validators')
 

//root

router.route('/')
    .get(reqRecievedLogger, getSongs)
    .post(reqRecievedLogger, songValidator, postSong)
    .delete(reqRecievedLogger, deleteSongs)


    router.route('/:songId')
    .get(reqRecievedLogger, getSong)
    .put(reqRecievedLogger, updateSong)
    .delete(reqRecievedLogger, deleteSong)

    router.route('/:songId/ratings')
    .get(reqRecievedLogger, getSongRatings)
    .post(reqRecievedLogger, postSongRating)
    .delete(reqRecievedLogger, deleteSongRatings)

    router.route('/:songId/ratings/:ratingId')
    .get(reqRecievedLogger, getSongRating)
    .put(reqRecievedLogger, updateSongRating)
    .delete(reqRecievedLogger, deleteSongRating)


    module.exports = router;