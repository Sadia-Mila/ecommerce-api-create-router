const express = require("express");
const categorySchema = require("../model/categorySchema");
const router = express.Router();

function categoryController(req, res) {
  const { name, description } = req.body;
  try {
    const createCategory = categorySchema({
      name,
      description,
    });
    createCategory.save();
    res.json({
      message: "Category added Successfully",
    });
  } catch (error) {
    return res.json({
      message: error,
    });
  }
}

async function getAllCategory(req, res) {
    const allCategoryList = await categorySchema.find({})
    res.json({
        message: "category Paichi",
        data : allCategoryList
    })
    
}

module.exports = {categoryController, getAllCategory};
