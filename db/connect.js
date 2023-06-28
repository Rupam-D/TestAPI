require("dotenv").config()
const mongoose = require("mongoose")


const connectDb = (uri) => {
     console.log("db connected");
     mongoose.connect(uri, {
          useNewUrlParser: true,
          // useCreateIndex: true,

          //
          useUnifiedTopology: true
          // useFindAndModify: false
     })
}



module.exports = connectDb

// TestAPI
