// const Order = require("../models/OrderModel");


// // PLACE ORDER
// const placeOrder = async (req, res) => {

//   try {

//     const {
//       items,
//       totalPrice,
//       address,
//       paymentMethod,
//     } = req.body;

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
// };


// // GET USER ORDERS
// const getUserOrders = async (req, res) => {

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
// };


// // UPDATE ORDER STATUS
// const updateOrderStatus = async (req, res) => {

//   try {

//     const { status } = req.body;

//     const updatedOrder =
//       await Order.findByIdAndUpdate(
//         req.params.id,
//         { status },
//         { new: true }
//       );

//     res.status(200).json({
//       message: "Order Status Updated",
//       updatedOrder,
//     });

//   } catch (error) {

//     res.status(500).json({
//       message: error.message,
//     });

//   }
// };


// module.exports = {
//   placeOrder,
//   getUserOrders,
//   updateOrderStatus,
// };






const Order =
  require(
    "../models/OrderModel"
  );


// PLACE ORDER
const placeOrder =
  async (req, res) => {

    try {

      const {

        items,

        totalPrice,

        address,

        paymentMethod,

      } = req.body;


      const order =
        await Order.create({

          userId:
            req.userId,

          items,

          totalPrice,

          address,

          paymentMethod,

        });


      res.status(201).json({

        message:
          "Order Placed",

        order,

      });

    } catch (error) {

      res.status(500).json({

        message:
          error.message,

      });

    }
  };


// GET USER ORDERS
const getUserOrders =
  async (req, res) => {

    try {

      const orders =
        await Order.find({

          userId:
            req.userId,

        })

        .populate(
          "items.foodId"
        )

        .sort({
          createdAt: -1,
        });


      res.status(200).json(
        orders
      );

    } catch (error) {

      res.status(500).json({

        message:
          error.message,

      });

    }
  };


// GET ALL ORDERS
const getAllOrders =
  async (req, res) => {

    try {

      const orders =
        await Order.find()

        .populate(
          "items.foodId"
        )

        .sort({
          createdAt: -1,
        });


      res.status(200).json(
        orders
      );

    } catch (error) {

      res.status(500).json({

        message:
          error.message,

      });

    }
  };


// UPDATE ORDER STATUS
const updateOrderStatus =
  async (req, res) => {

    try {

      const { status } =
        req.body;


      const updatedOrder =

        await Order.findByIdAndUpdate(

          req.params.id,

          { status },

          { new: true }

        );


      res.status(200).json({

        message:
          "Order Status Updated",

        updatedOrder,

      });

    } catch (error) {

      res.status(500).json({

        message:
          error.message,

      });

    }
  };


module.exports = {

  placeOrder,

  getUserOrders,

  getAllOrders,

  updateOrderStatus,

};