const config = require("config");
const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  //header
  const token = req.header("x-auth-token");

  //Check for token
  if (!token) return res.status(401).json({ msg: "Access denied" });

  try {
    //Verify token
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    // Add user from payload
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({ msg: "Not valid token" });
  }
}

module.exports = auth;
