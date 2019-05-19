const jwt = require("jsonwebtoken");
const secret = process.env.SECRET || "It's a secret";

module.exports = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization;
    jwt.verify(token, secret, (error, decodedToken) => {
      if (error) {
        res.status(401).json({ message: "Entry forbidden invalid token." });
      } else {
        next();
      }
    });
  } else {
    res.status(401).json({ message: "Needs a token, invalid request." });
  }
};
