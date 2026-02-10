const express = require('express')
const {productController, getAllProduct, updateProduct, singleproductdelete, deleteAllProduct} = require('../../controllers/productController')
const router = express.Router()

router.post("/createproduct", productController)
router.get("/allproductList", getAllProduct)
router.patch("/updateproduct/:id", updateProduct)
router.delete("/singleproductdelete/:id", singleproductdelete)
router.delete("/allproductdelete", deleteAllProduct)



module.exports = router