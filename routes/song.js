const express = require('express');
const router = express.Router();
const {
    getSongs,
    postSong,
    deleteSongs,
    getSong,
    updateSong,
    deleteSong

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

    module.exports = router;