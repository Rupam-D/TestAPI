const mongoose = require("mongoose")
const productsSchema = new mongoose.Schema({
     name: {
          type: String,
          // required: true
     },
     price: {
          type: Number,
          // required: [true, "price must be provided"]
     },
     features: {
          type: Boolean,
          default: false
     },
     rating: {
          type: Number,
          default: 4.5,
          // required: [true, "rating must be provided"]
     },
     company: {
          type: String,
          enum: {
               values: ["apple", "mi", "vivo", "oneplus", "oppo", "sony", "samsung", "realme"],
               message: `{value} not supported`
          }
     },
     createdAt: {
          type: Date,
          default: Date.now()
     }

})

const Product = new mongoose.model("Product", productsSchema)

module.exports = Product