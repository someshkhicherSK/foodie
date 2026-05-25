// const express = require("express");

// const Order = require("../models/OrderModel");

// const authMiddleware = require("../middleware/authMiddleware");

// const router = express.Router();


// // PLACE ORDER
// router.post("/place", authMiddleware, async (req, res) => {
//   try {

// const {
//   items,
//   totalPrice,
//   address,
//   paymentMethod,
// } = req.body;
//     const order = await Order.create({
//       userId: req.userId,
//       items,
//       totalPrice,
//       address,
//       paymentMethod,
//     });

//     res.status(201).json({
//       message: "Order Placed",
//       order,
//     });

//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// });


// // GET USER ORDERS
// router.get("/", authMiddleware, async (req, res) => {
//   try {

//     const orders = await Order.find({
//       userId: req.userId,
//     }).populate("items.foodId");

//     res.status(200).json(orders);

//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// });
// router.put("/status/:id", async (req, res) => {
//   try {

//     const { status } = req.body;

//     const updatedOrder = await Order.findByIdAndUpdate(
//       req.params.id,
//       { status },
//       { new: true }
//     );

//     res.status(200).json({
//       message: "Order Status Updated",
//       updatedOrder,
//     });

//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// });

// module.exports = router;




// const express = require("express");

// const {
//   placeOrder,
//   getUserOrders,
//   updateOrderStatus,
// } = require("../controllers/orderController");

// const authMiddleware = require("../middleware/authMiddleware");

// const adminMiddleware = require("../middleware/adminMiddleware");

// const router = express.Router();


// // PLACE ORDER
// router.post(
//   "/place",
//   authMiddleware,
//   placeOrder
// );


// // GET USER ORDERS
// router.get(
//   "/",
//   authMiddleware,
//   getUserOrders
// );


// // UPDATE ORDER STATUS
// router.put(
//   "/status/:id",
//   authMiddleware,
//   adminMiddleware,
//   updateOrderStatus
// );

// module.exports = router;





const express =
  require("express");

const {

  placeOrder,

  getUserOrders,

  getAllOrders,

  updateOrderStatus,

} = require(
  "../controllers/orderController"
);

const authMiddleware =
  require(
    "../middleware/authMiddleware"
  );

const adminMiddleware =
  require(
    "../middleware/adminMiddleware"
  );

const router =
  express.Router();


// PLACE ORDER
router.post(

  "/place",

  authMiddleware,

  placeOrder

);


// GET USER ORDERS
router.get(

  "/",

  authMiddleware,

  getUserOrders

);


// GET ALL ORDERS
router.get(

  "/all",

  authMiddleware,

  adminMiddleware,

  getAllOrders

);


// UPDATE ORDER STATUS
router.put(

  "/status/:id",

  authMiddleware,

  adminMiddleware,

  updateOrderStatus

);


module.exports =
  router;