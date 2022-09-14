const express = require('express');
const connection = require('./config')

const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    connection.query("select * from user",(err,result)=>{
        if(err){
            res.send("error")
        }else{
            res.send(result)
        }
    })
    })

app.post('/',(req,res)=>{
    const data = req.body;
    connection.query("INSERT INTO user SET ?",data,(err,result,field)=>{
        if(err)throw err
        res.send(result)
    })
    // console.log(data)

})    

app.put('/:id', (req, res) => {
    const data = [req.body.name,req.body.password,req.body.email,req.params.id]
   connection.query("UPDATE user SET name = ?,password = ?,email = ? where id = ?",data, (err, result) => {
    if(err)throw err
    res.send(result)
   })
})

app.delete('/:id', (req, res) => {
    connection.query("DELETE FROM user WHERE id ="+ req.params.id, (err,results) => {
        if(err)throw err
        res.send(results)
})
   
})

app.listen('5000',()=>{
    console.log('Listening on port 5000');
})