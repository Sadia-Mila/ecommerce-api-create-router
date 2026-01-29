function authMiddleware(req, res, next) {
    if(req.session.isVerified){
        next()

    }
    else{
        res.json({ message: "UnAuthorized Access"})
    }
}

module.exports = authMiddleware