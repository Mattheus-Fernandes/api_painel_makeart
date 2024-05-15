const ProductRouter = require("express").Router()
const {findAllProducts, findOneProduct, registerProduct, deleteProduct, editProduct, lastUpdate, lastSales} = require("../controller/ProductController")



ProductRouter.get("/product/sales", lastSales)
ProductRouter.get("/product/update", lastUpdate)
ProductRouter.get("/product", findAllProducts)
ProductRouter.get("/product/:id", findOneProduct)
ProductRouter.post("/product", registerProduct)
ProductRouter.delete("/product/:id", deleteProduct)
ProductRouter.put("/product/:id", editProduct)



module.exports = ProductRouter