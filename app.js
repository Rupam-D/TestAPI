const express = require("express")
const port = process.env.PORT || 5000
const app = express()
require("dotenv").config()

const connectDb = require("./db/connect")
const apiRoutes = require("./routes/products")

app.get("/", (req, res) => {
     res.status(200).send("Hello I am live")
})

app.use("/products/api", apiRoutes)

const server = async () => {
     try {
          await connectDb(process.env.DB_URL)
          app.listen(port, () => {
               console.log(`Running at port ${port}`);
          })
     } catch (error) {
          console.log(error)
     }
}

server()