const express = require('express')
const dbconnect = require('./mongodb')
const mongodb = require('mongodb')

const app = express();

// app.use(express.json())

// app.get('/',async (req,res)=>{
//     let db =await dbconnect();
//     let data = await db.find().toArray() 
//     res.send(data)
// })

// app.post('/',async (req,res)=>{
//     let db = await dbconnect();
//     let data = await db.insert(req.body)
//     res.send(data)
// })

// app.put('/:name',async(req,res)=>{
//     let db =await dbconnect()
//     let data = db.updateOne({name:req.params.name},{$set:req.body})
//     res.send({result:"updated"})
// })

// app.delete('/:id',async(req,res)=>{
//     let db = await dbconnect();
//     let data = await db.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
//     res.send(data)
// })
app.listen(5000,console.log("server running port on 5000"))