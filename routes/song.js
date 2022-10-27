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
const reqRecievedLogger = require('../middlewares/reqRecievedLogger');
const {songValidator} = require('../middlewares/utils/validators');
const protectedRoute = require('../middlewares/auth');

//root

router.route('/')
    .get(reqRecievedLogger, getSongs)
    .post(reqRecievedLogger, protectedRoute, songValidator, postSong)
    .delete(reqRecievedLogger, protectedRoute, deleteSongs)


    router.route('/:songId')
    .get(reqRecievedLogger, getSong)
    .put(reqRecievedLogger, protectedRoute, updateSong)
    .delete(reqRecievedLogger, protectedRoute, deleteSong)

    router.route('/:songId/ratings')
    .get(reqRecievedLogger, getSongRatings)
    .post(reqRecievedLogger, postSongRating)
    .delete(reqRecievedLogger, deleteSongRatings)

    router.route('/:songId/ratings/:ratingId')
    .get(reqRecievedLogger, getSongRating)
    .put(reqRecievedLogger, updateSongRating)
    .delete(reqRecievedLogger, deleteSongRating)


    module.exports = router;