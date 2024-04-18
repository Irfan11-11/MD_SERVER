const jwt = require('jsonwebtoken')

const jwtMiddleware = (req, res, next) => {
    console.log("insde jwt!!!");
    const token = req.headers["authorization"].split(" ")[1]
    if (token) {
        console.log(token);
        try {
            const jwtRespones = jwt.verify(token, process.env.JWT_SECRET)
            console.log(jwtRespones);
            req.payload = jwtRespones.userId
            next()
        } catch (err) {
            res.status(401).json("Auth failed.. please login")
        }
    } else {
        res.status(406).json("please provide token")
    }
}

module.exports = jwtMiddleware