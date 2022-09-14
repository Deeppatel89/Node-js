const mongoose = require('mongoose')


mongoose.connect("mongodb://127.0.0.1:27017/e-com");
const ProductSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  cetagory: String
})
const savedb = async () => {
  const ProductModel = mongoose.model('products', ProductSchema)
  let data = new ProductModel({ name: "m12 pro", price: 2000, brand: "MI", cetagory: "Mobile" })
  let result = await data.save()
  console.log(result)
}

const update = async() =>{
  const ProductModel = mongoose.model('products',ProductSchema)
  let data =await ProductModel.updateOne(
    {name:"m12 pro"},{$set:{price:14000}}
  )
  console.log(data)
}

const deleteIn =async() =>{
  const ProductModel = mongoose.model('product',ProductSchema)
  let data = await ProductModel.deleteOne({name:"m12"})
  console.log(data)

}
const findIn =async() =>{
  const ProductModel = mongoose.model('product',ProductSchema)
  let data = await ProductModel.find({name: 's22 ultra'})
  console.log(data)

}
// main()
// update()
// deleteIn()
// findIn()

