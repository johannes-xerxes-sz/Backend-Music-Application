const songValidator = (req, res, next) => { 
    if (req.body) {
        if (!req.body.songTitle || 
            !req.body.artist || 
            !req.body.genre ) {
            res
            .status(400)
            .setHeader('Content-Type', 'text/plain')
            .end('Missing Required Fields')

        }
        else {
            next();
        }

    }
    else {
        res
        .end(`Request for path: ${req.protocol} and method: ${req.method} is missing payload`);
    }
}

const artistValidator = (req, res, next) => { 
    if (req.body) {
        if (!req.body.firstName || 
            !req.body.lastName || 
            !req.body.genre ) {
            res
            .status(400)
            .setHeader('Content-Type', 'text/plain')
            .end('Missing Required Fields')

        }
        else {
            next();
        }

    }
    else {
        res
        .end(`Request for path: ${req.protocol} and method: ${req.method} is missing payload`);
    }

}

const userValidator = (req, res, next) => { 
    if (req.body) {
        if (!req.body.userName || 
            !req.body.age || 
            !req.body.gender ||
            !req.body.email ||
            !req.body.password ||
            !req.body.firstName ||
            !req.body.lastName ) {
            res
            .status(400)
            .setHeader('Content-Type', 'text/plain')
            .end('Missing Required Fields')

        }
        else {
            next();
        }

    }
    else {
        res
        .end(`Request for path: ${req.protocol} and method: ${req.method} is missing payload`);
    }
}

const adminValidator = (req, res, next) => {
    if (req.user.admin) {
        next()
    }
    else {
        res
        .status(403)
        .setHeader('Content-Type', 'application/json')
        .json({success: false, msg: 'Unauthorized to access this resource!'})
    }
}

module.exports = {
    songValidator,
    userValidator,
    artistValidator,
    adminValidator
}

//params, body, query