const User = require("../models/UserModel");

const adminMiddleware = async (req, res, next) => {

  try {

    const user = await User.findById(req.userId);

    if (user.role !== "admin") {
      return res.status(403).json({
        message: "Admin Access Denied",
      });
    }

    next();

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = adminMiddleware;