const express = require('express');
const router = express.Router();
const {
    getUsers,
    createUser,
    deleteUsers,
    getUser,
    updateUser, 
    deleteUser,
    login
 
} = require('../controllers/userController');
const protectedRoute = require('../middlewares/auth')
const reqRecievedLogger  = require('../middlewares/reqRecievedLogger');
const {
    userValidator,
    adminValidator
} = require('../middlewares/utils/validators')

//root

router.route('/')
    .get(reqRecievedLogger, protectedRoute, adminValidator, getUsers)
    .post(reqRecievedLogger, userValidator, createUser)
    .delete(reqRecievedLogger, protectedRoute, adminValidator, deleteUsers)


router.route('/login')
    .post(reqRecievedLogger, login)
 
router.route('/:userId')
    .get(reqRecievedLogger, getUser) 
    .put(reqRecievedLogger, protectedRoute, updateUser)
    .delete(reqRecievedLogger, protectedRoute, deleteUser)

    module.exports = router;