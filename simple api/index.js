//=======================================Simple Api======================================================================

// const http = require('http');
// const data = require('./data')

// http.createServer((req,res)=>{
// res.writeHead(200,{'Content-type':'application\json'});
// res.write(JSON.stringify(data));
// res.end();
// }).listen(5000);

// console.log('start')

//=============================================Input CommandLine=========================================================
// console.log(process.argv)


// const fs = require('fs')


// const input = process.argv;

// if (input[2] == 'add') {
//     fs.writeFileSync(input[3], input[4])
// }else if(input[2] == 'remove'){
//     fs.unlinkSync(input[3])
// }else{
//     console.log('Invalid input')
// }

//=============================================CRUD=======================================================================

// const { rejects } = require('assert');
// const fs = require('fs');
// const path = require('path');

// const dirpath = path.join(__dirname,'crud');
// const filepath = `${dirpath}/apple.txt`;
// create file
// fs.writeFileSync(filepath,'this is a simple text file');
//Readfile
// fs.readFile(filepath,'utf8',(err,file)=>{
//     console.log(file)
// })
//Update file
// fs.appendFile(filepath,' and file name is apple.txt',(err)=>{
//     if(!err){
//         console.log("File updated")
//     }
// })
//rename file

// fs.rename(filepath,`${dirpath}/banana.txt`,(err)=>{
//     if(!err){
//         console.log("rename file")
//     }
// })

//Delete file
// fs.unlinkSync(`${dirpath}/banana.txt`)

//=========================================Promise========================================================================

// let a=20;
// let b=0;

// let waitingdata = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(30);
//     },2000)
// })

// waitingdata.then((data)=>{
//     console.log(a+data);

// })

// console.log("first");

// setTimeout(()=>{
//     console.log("Second");
// },2000)
// console.log("third");

//================================================Express================================================================

// const express = require('express');

// const app = express();

// app.get('',(req,res)=>{
//     console.log("data sent by ",req.query.name)
//     res.send('hello, this is a home page'+req.query.name )
// })

// app.get('/about',(req,res)=>{
//     res.send('hello, this is a about page')
// })
// app.get('/help',(req,res)=>{
//     res.send('hello, this is a help page')
// })

// app.listen(5000)

//=============================================================================================

// const express = require('express');
// const path = require('path')
// const app = express();
// const publicpath = path.join(__dirname,'public')

// app.set('view engine','ejs');

// app.use(express.static(publicpath))

// app.get('',(req,res)=>{
//     res.sendfile(`${publicpath}/index.html`)
// })
// app.get('/profile',(req,res)=>{
//   const user={
//         name:"Deep",
//         email:"Deep@gmail.com",
//         city:"surat"
//     }
//     res.render('profile',{user})
// })

// app.get('/contact',(req,res)=>{
//     res.render('contact')
// })


// app.listen(5000)
// console.log("server start")

//===============================================Middlewere==============================================================

// const express = require('express')
// const reqFilter = require('./middlewers/middlewere')
// const route = express.Router()
// const app = express();



  
// //  app.use(reqFilter);
// route.use(reqFilter)

// app.get('/',(req,res)=>{
//     res.send('Welcome to the Home page')
// })
// app.get('/user',(req,res)=>{
//     res.send('Welcome to the user page')
// })
// route.get('/about',(req,res)=>{
//     res.send('Welcome to the about page')
// })
// route.get('/help',(req,res)=>{
//     res.send('Welcome to the help page')
// })
// app.use('/',route)
// app.listen(5000);