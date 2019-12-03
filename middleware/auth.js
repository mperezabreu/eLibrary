const config = require("config");
const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const token = req.header("x-auth-token");

  //Token validation
  if (!token) res.status(401).json({ msg: "Aceso invalido: No token" });

  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    //Grab user
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({ msg: "Token invalido." });
  }
}

module.exports = auth;
