const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    username: String,
    password: String,

});

let usermodle = mongoose.model('user', userSchema);

module.exports = usermodle;