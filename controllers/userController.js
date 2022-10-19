//! For ‘/’ endpoint: 
const { query } = require("express")

const getUsers = (req, res, next) => {

/*     if (Object.keys(req.query).length) {
        const {
            userName,
            gender,
            age
        } = req.query

        const filter = [];
        if (userName) filter.push(userName)
        if (gender) filter.push(gender)
        if (age) filter.push(age)

        for (let i = 0; i < filter.length; i++) {
            console.log(`Searching user by: ${filter[i]}`)
        }
    } */

    try { 
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json( { success: true, msg:'Show me all User'})
    }
    catch (err) {

    }


}

const postUser = (req, res, next) => {
    res
    .status(201)
    .setHeader('Content-Type', 'application/json')
    .json( {success: true,
            msg: `create one item with the following fields:
            userName: ${req.body.userName}
            gender: ${req.body.gender}
            age: ${req.body.age}
            `})
}

const deleteUsers = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json( { success: true, msg:'Deleted all User'})
}


//! For /:UserID endpoint: 

const getUser = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json( { success: true, msg: `Show the User with id: ${req.params.userId}`}) // ${req.params.songId}
}

const updateUser = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json( { success: true, msg: `Update the User with id: ${req.params.userId}`}) // ${req.params.songId}
}

const deleteUser = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json( { success: true, msg: `Delete the User with id: ${req.params.userId}`}) // ${req.params.songId}
}

module.exports = {
    
    getUsers,
    postUser,
    deleteUsers,
    getUser,
    updateUser,
    deleteUser

}