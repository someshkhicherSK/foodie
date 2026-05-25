const Cart = require("../models/CartModel");


// ADD TO CART
const addToCart = async (req, res) => {

  try {

    const { foodId, quantity } = req.body;

    const cartItem = await Cart.create({
      userId: req.userId,
      foodId,
      quantity,
    });

    res.status(201).json({
      message: "Item Added To Cart",
      cartItem,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};


// GET USER CART
const getUserCart = async (req, res) => {

  try {

    const cartItems = await Cart.find({
      userId: req.userId,
    }).populate("foodId");

    res.status(200).json(cartItems);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};


// REMOVE CART ITEM
const removeCartItem = async (req, res) => {

  try {

    await Cart.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      message: "Item Removed",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};


module.exports = {
  addToCart,
  getUserCart,
  removeCartItem,
};