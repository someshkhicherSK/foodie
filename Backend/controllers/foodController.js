const Food = require("../models/FoodModel");


// ADD FOOD
const addFood = async (req, res) => {

  try {

    const food = await Food.create({
      name: req.body.name,
      price: req.body.price,
      category: req.body.category,
      description: req.body.description,
      image: req.file.filename,
    });

    res.status(201).json({
      message: "Food Added",
      food,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};


// GET ALL FOODS
const getFoods = async (req, res) => {

  try {

    const foods = await Food.find();

    res.status(200).json(foods);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};


// DELETE FOOD
const deleteFood = async (req, res) => {

  try {

    await Food.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      message: "Food Deleted",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};


// UPDATE FOOD
const updateFood = async (req, res) => {

  try {

    const updatedFood =
      await Food.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

    res.status(200).json({
      message: "Food Updated",
      updatedFood,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};


module.exports = {
  addFood,
  getFoods,
  deleteFood,
  updateFood,
};