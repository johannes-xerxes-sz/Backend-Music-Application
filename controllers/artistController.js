//! For ‘/’ endpoint: 

const getArtists = (req, res, next) => {

    if (Object.keys(req.query).length) {
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
    }

    res
    .status(201)
    .setHeader('Content-Type', 'application/json')
    .json( { success: true, msg:'Show me all Artist'})
}

const postArtist = (req, res, next) => {
    res
    .status(201)
    .setHeader('Content-Type', 'application/json')
    .json( { msg: `create one item with the following fields:
    firstName: ${req.body.firstName}
    lastName: ${req.body.lastName}
    gender: ${req.body.gender}`
})
}

const deleteArtists = (req, res, next) => {
    res
    .status(201)
    .setHeader('Content-Type', 'application/json')
    .json( { success: true, msg:'Deleted all Artist'})
}


//! For artistId endpoint: 

const getArtist = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json( { success: true, msg: `Show the Artist with id: ${req.params.artistId} `}) // ${req.params.songId}
}

const updateArtist = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json( { success: true, msg: `Update the Artist with id: ${req.params.artistId}`}) // ${req.params.songId}
}

const deleteArtist = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json( { success: true, msg: `Update the Artist with id: ${req.params.artistId}`}) // ${req.params.songId}
}

module.exports = {
    
    getArtists,
    postArtist,
    deleteArtists,
    getArtist,
    updateArtist,
    deleteArtist

}