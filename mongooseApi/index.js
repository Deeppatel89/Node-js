const express = require('express')
require('./config')
const product = require('./product')

const app = express();

app.use(express.json())


// app.post('/create',async(req,res)=>{
//     const data = new product(req.body)
//     let result = await data.save()
//     console.log(result)
//     res.send("Done")

// })
// app.get('/list',async(req,res)=>{
//     const data =await product.find();
//      res.send(data)     
// })

// app.delete('/delete/:_id',async(req,res)=>{
//     console.log(req.params)
//     const data =await product.deleteOne(req.params)
//     res.send(data)
// })

// app.put('/update/:_id',async(req,res)=>{
//     const data =await product.updateOne(req.params,{$set:req.body})
//     res.send(data)
 
// })
app.get('/search/:key',async(req,res)=>{
    let data =await product.find(
        {
            "$or":[
                {"name":{$regex:req.params.key}},
                {"brand":{$regex:req.params.key}}
            ]
        }
    )
    res.send(data)
})



app.listen(5000)

