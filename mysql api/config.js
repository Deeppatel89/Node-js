const mysql = require('mysql');

const connection = mysql.createConnection({
    
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test',

})

connection.connect(()=>{
    console.log('Connected to MySQL Server');
})

module.exports = connection
