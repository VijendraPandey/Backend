const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  const { token } = req.cookies; // ✅ FIXED

  if (!token) {
    return res.status(401).json({
      message: "Token not found!",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }
};

module.exports = auth;
