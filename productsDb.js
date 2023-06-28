require("dotenv").config()

const Product = require("./models/productsSchema")
const connectDb = require("./db/connect")
const productsData = require("./products.json")

const create = async () => {
     try {
          await connectDb(process.env.DB_URL)
          // await Product.deleteMany()
          await Product.create(productsData)
          console.log("created 200")


     } catch (e) {
          console.log(e);
     }
}
create()
