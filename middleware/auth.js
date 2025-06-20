const jwt = require("jsonwebtoken");
const verifytoken = async (req, res, next) => {
    let token = req.headers["authorization"]
    if (token) {
        token = token.split(" ")[1];


        jwt.verify(token, process.env.securekey, (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: "token invalid" })


            }
            else {
                req.user = decoded
                next()
            }

        })



    }
    else {

        return res.status(401).json({ message: "toke invalid" })
    }

}
module.exports = verifytoken;
