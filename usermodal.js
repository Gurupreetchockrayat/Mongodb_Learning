const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/mongodbpractice');

const userSchema = mongoose.Schema({

    username:String,
    email:String
    

})

module.exports = mongoose.model('user', userSchema);
