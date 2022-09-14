const express = require('express');
require('./connect')
const usermodle = require('./modle');

const app =  express();
app.use(express.json()); 
app.use(express.urlencoded({ extended :false}));  //body parser 

app.set('view engine','ejs');

app.get('/', (req, res) => {
    // res.send('Hello World');
    res.render('register');
})

app.post('/', async(req, res) => {
    console.log(req.body);
    const {name,email,username,password} = req.body;
    let data = new usermodle({
        name:name,
        email:email,
        username:username,
        password:password
    })
    await data.save();
    res.redirect('/login');
})

app.get('/login', (req, res) => {
    res.render('login');
})

app.post('/login', async(req, res) => {
    console.log(req.body);
    const {username, password} = req.body;
    let user = await usermodle.findOne({username: username});
    if(user){
        if(password == user.password){
            res.send("login success");
        }else{
            res.send("password not match")
        }
    }else{
        res.send("usernot found")
    }
})

app.get('/showdata',async(req, res)=>{
    let data =await usermodle.find()
    // console.log(data)
    res.render('alldata',{data});
})

app.get('/delet/:id',async(req,res)=>{
    console.log(req.params.id);
    let data =await usermodle.deleteOne({_id : req.params.id})
    console.log(data)
    res.redirect('/showdata');

})
app.get('/update/:id',async(req,res)=>{
    // console.log(req.params.id);
 
    let data = await usermodle.findOne({_id:req.params.id})
    res.render('update',{data});
})
app.post('/update/:id',async(req, res)=>{
    console.log(req.body)
    let data = await usermodle.updateOne({_id:req.params.id},{$set:req.body})
    console.log(data)
    res.redirect('/showdata');


})


app.listen(5000,()=>{
    console.log('Listening on port 5000');
})