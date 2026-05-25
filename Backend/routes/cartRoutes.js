// const express = require("express");

// const Cart = require("../models/CartModel");
// const authMiddleware = require("../middleware/authMiddleware");

// const router = express.Router();


// // ADD TO CART
// router.post("/add", authMiddleware, async (req, res) => {
//   try {

//     const { foodId, quantity } = req.body;

//     const cartItem = await Cart.create({
//       userId: req.userId,
//       foodId,
//       quantity,
//     });

//     res.status(201).json({
//       message: "Item Added To Cart",
//       cartItem,
//     });

//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// });


// // GET USER CART
// router.get("/", authMiddleware, async (req, res) => {
//   try {

//     const cartItems = await Cart.find({
//       userId: req.userId,
//     }).populate("foodId");

//     res.status(200).json(cartItems);

//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// });


// // REMOVE CART ITEM
// router.delete("/:id", authMiddleware, async (req, res) => {
//   try {

//     await Cart.findByIdAndDelete(req.params.id);

//     res.status(200).json({
//       message: "Item Removed",
//     });

//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// });

// module.exports = router;





const express = require("express");

const {
  addToCart,
  getUserCart,
  removeCartItem,
} = require("../controllers/cartController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();


// ADD TO CART
router.post(
  "/add",
  authMiddleware,
  addToCart
);


// GET USER CART
router.get(
  "/",
  authMiddleware,
  getUserCart
);


// REMOVE CART ITEM
router.delete(
  "/:id",
  authMiddleware,
  removeCartItem
);

module.exports = router;