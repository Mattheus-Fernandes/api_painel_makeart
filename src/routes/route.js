const route = require("express").Router()

route.use("/api", require("./ProductRoutes"))

module.exports = route