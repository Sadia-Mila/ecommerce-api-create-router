const express = require('express')
const {categoryController, getAllCategory} = require('../../controllers/categoryController')
const router = express.Router()

router.post("/createcategory", categoryController)
router.get("/allcategorylist", getAllCategory)

module.exports = router