const express = require('express');
const router = express.Router();
const {
    getArtists,
    postArtist,
    deleteArtists,
    getArtist,
    updateArtist,
    deleteArtist,
    postArtistImage

} = require('../controllers/artistController');
 const reqRecievedLogger = require('../middlewares/reqRecievedLogger');
const {artistValidator} = require('../middlewares/utils/validators');
const protectedRoute = require('../middlewares/auth');

//root

router.route('/')
    .get(reqRecievedLogger, getArtists)
    .post(reqRecievedLogger, protectedRoute, artistValidator, postArtist)
    .delete(reqRecievedLogger, protectedRoute, deleteArtists)


    router.route('/:artistId')
    .get(reqRecievedLogger, getArtist)
    .put(reqRecievedLogger, protectedRoute, updateArtist)
    .delete(reqRecievedLogger, protectedRoute, deleteArtist)

    router.route('/:artistId/image')
    .post(reqRecievedLogger, protectedRoute, postArtistImage)

    module.exports = router;