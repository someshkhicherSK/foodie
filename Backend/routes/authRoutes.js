// const express = require("express");
// const authMiddleware = require("../middleware/authMiddleware");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const User = require("../models/UserModel");

// const router = express.Router();

// router.post("/register", async (req, res) => {
//   try {

//     const { name, email, contact, password } = req.body;

//     // check existing user
//     const existingUser = await User.findOne({ email });

//     if (existingUser) {
//       return res.status(400).json({
//         message: "User already exists",
//       });
//     }

//     // hash password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // create user
//     const user = await User.create({
//       name,
//       email,
//       contact,
//       password: hashedPassword,
//     });

//     res.status(201).json({
//       message: "User Registered",
//       user,
//     });

//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// });
// // Login 
// router.post("/login", async (req, res) => {
//   try {

//     const { email, password } = req.body;

//     // check user
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(400).json({
//         message: "User not found",
//       });
//     }

//     // compare password
//     const isMatch = await bcrypt.compare(
//       password,
//       user.password
//     );

//     if (!isMatch) {
//       return res.status(400).json({
//         message: "Invalid password",
//       });
//     }

//     // create token
//     const token = jwt.sign(
//       {
//         id: user._id,
//       },
//       process.env.JWT_SECRET,
//       {
//         expiresIn: "7d",
//       }
//     );

//     res.status(200).json({
//       message: "Login Successful",
//       token,
//       user,
//     });

//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// });
// // profile
// router.get("/profile", authMiddleware, async (req, res) => {

//   res.status(200).json({
//     message: "Profile Access Granted",
//     userId: req.userId,
//   });

// });
// module.exports = router;





const express = require("express");

const {
  registerUser,
  loginUser,
  getProfile,
} = require("../controllers/authController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();


// REGISTER
router.post(
  "/register",
  registerUser
);


// LOGIN
router.post(
  "/login",
  loginUser
);


// PROFILE
router.get(
  "/profile",
  authMiddleware,
  getProfile
);

module.exports = router;