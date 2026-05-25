// const express = require("express");
// const authMiddleware = require("../middleware/authMiddleware");

// const adminMiddleware = require("../middleware/adminMiddleware");

// const Food = require("../models/FoodModel");
// const upload = require("../middleware/multer");
// const router = express.Router();


// // ADD FOOD
// router.post(
//   "/add",
//   authMiddleware,
//   adminMiddleware,
//   upload.single("image"),
//   async (req, res) => {

//     try {

//       const food = await Food.create({
//         name: req.body.name,
//         price: req.body.price,
//         category: req.body.category,
//         description: req.body.description,
//         image: req.file.filename,
//       });

//       res.status(201).json({
//         message: "Food Added",
//         food,
//       });

//     } catch (error) {
//       res.status(500).json({
//         message: error.message,
//       });
//     }
//   }
// );

// // GET ALL FOODS
// router.get("/", async (req, res) => {
//   try {

//     const foods = await Food.find();

//     res.status(200).json(foods);

//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// });
// // delete
// router.delete("/:id", async (req, res) => {
//   try {

//     await Food.findByIdAndDelete(req.params.id);

//     res.status(200).json({
//       message: "Food Deleted",
//     });

//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// });
// // Update
// router.put("/:id", async (req, res) => {
//   try {

//     const updatedFood = await Food.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );

//     res.status(200).json({
//       message: "Food Updated",
//       updatedFood,
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
  addFood,
  getFoods,
  deleteFood,
  updateFood,
} = require("../controllers/foodController");

const authMiddleware = require("../middleware/authMiddleware");

const adminMiddleware = require("../middleware/adminMiddleware");

const upload = require("../middleware/multer");

const router = express.Router();


// ADD FOOD
router.post(
  "/add",
  authMiddleware,
  adminMiddleware,
  upload.single("image"),
  addFood
);


// GET ALL FOODS
router.get(
  "/",
  getFoods
);


// DELETE FOOD
router.delete(
  "/:id",
  authMiddleware,
  adminMiddleware,
  deleteFood
);


// UPDATE FOOD
router.put(
  "/:id",
  authMiddleware,
  adminMiddleware,
  updateFood
);

module.exports = router;