const express = require("express")
const router = express.Router()

const getAllPdts = require("../controllers/products")

router.route("/").get(getAllPdts)
module.exports = router

