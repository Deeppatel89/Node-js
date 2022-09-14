const express = require('express');
const multer = require('multer');
// const os = require('os');

// console .log(os.totalmem()/(1024*1024*1024))
const app = express();

const cors = require('cors');
app.use(cors({
    origin: " http://localhost:3000"
}))

const uplode = multer({
    storage: multer.diskStorage({
        destination: (req, res, cd) => {
            cd(null, 'upload')
        },
        filename: (req, file, cd) => {
            cd(null, "deep.jpg")
        }
    })


}).single("user_file");

app.post('/',uplode, (req, res) => {
    console.log(req.body)
    console.log(req.file)
    res.send('file uplode')
})

app.listen(5000, () => {
    console.log('Listening on port 5000');
})  
