const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
   Name: {
    type: String,
    required: true
   },
   Age: Number,
   Phone: String 
});

const UserModel = mongoose.model('UserModel', userSchema);
module.exports = UserModel;
