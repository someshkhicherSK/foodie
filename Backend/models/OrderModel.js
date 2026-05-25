const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    items: [
      {
        foodId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Food",
        },

        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],

    totalPrice: {
      type: Number,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      default: "Pending",
    },
    paymentMethod: {
  type: String,
  enum: ["COD", "ONLINE"],
  default: "COD",
},

paymentStatus: {
  type: String,
  default: "Pending",
},
  },
  
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);