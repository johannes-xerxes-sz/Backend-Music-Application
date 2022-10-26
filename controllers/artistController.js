const Artist = require('../models/Artist');
const path = require('path');

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


const postArtistImage = async(req, res, next) => {
    // First check if the req object has a key called ‘files’, if not, throw a new Error with the following message: ‘Missing Image!’
    if(!req.files) throw new Error('Missing image!')
    // Create a new variable called ‘file’ and assign it to the req.files.file value
    const file = req.files.file
    // Check if the file type is a ‘image’ type, if it isn’t, throw a new Error with the following message: ‘Please upload image file type!’
    if (!file.mimetype.startsWith('image')) throw new Error('Please upload an image file type!')
    // Check if the file size is greater than the max file size stated from the config file where the max size limit was set at 100000000 bytes or 100000 mega-bytes. If the file size exceeds the MAX_FILE_SIZE, throw a new Error with the following message: ‘Image exceeds size of ${process.env.MAX_FILE_SIZE}’.
    if (file.size > process.env.MAX_FILE_SIZE) throw new Error(`Image exceeds size of ${process.env.MAX_FILE_SIZE}`);
    // Now, name the file by adding a new key-value like this:
    file.name = `photo_${path.parse(file.name).ext}`
    // Now, create a variable called ‘filePath’ equal to __dirname + ‘/files’ + file.name
    const filePath = process.env.FILE_UPLOAD_PATH + file.name
    // Now create a method that moves the file to the filePath variable and with a second argument (async) to handle uploading the new image for that artist to the database.
    file.mv((filePath), async (err) => {
        // 6.1: First check if there is a error object, if so, throw a new Error with the following message: ‘Problem uploading photo’
        if (err) throw new Error('Problem uploading photo');
        // 6.2: Use the findByIdAndUpdate() method to upload the new file with the value being the file.name.
        await Artist.findByIdAndUpdate(req.params.artistId, { image: file.name})
        // 6.3: Construct a res object with the appropriate status code, header, and json payload.
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json({ success: true, data: file.name})
    })
}

module.exports = {
    
    getArtists,
    postArtist,
    deleteArtists,
    getArtist,
    updateArtist,
    deleteArtist,
    // Export the new file ‘postArtistImage’.
    postArtistImage

}