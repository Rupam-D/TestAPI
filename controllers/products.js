const Product = require("../models/productsSchema")

const getAllPdts = async (req, res) => {

     const { company, features, name, sort, select } = req.query
     const queryObj = {}

     if (company) {
          queryObj.company = company
     }
     if (features) {
          queryObj.features = features
     }
     if (name) {
          queryObj.name = { $regex: name, $options: 'i' }
     }
     let dataAPI = Product.find(queryObj)
     if (sort) {
          let sortFix = sort.split(",").join(" ")
          queryObj.sort = sortFix
          dataAPI = dataAPI.sort(sortFix)
     }
     if (select) {
          let selectFix = select.split(",").join(" ")
          queryObj.select = selectFix
          dataAPI = dataAPI.select(selectFix)
     }

     let page = Number(req.query.page) || 1
     let limit = Number(req.query.limit) || 3

     let skip = (page - 1) * limit
     dataAPI = dataAPI.skip(skip).limit(limit)
     // const { key, value } = req.query
     const data = await dataAPI
     res.status(200).send(data)
     console.log(req.query)
}

module.exports = getAllPdts