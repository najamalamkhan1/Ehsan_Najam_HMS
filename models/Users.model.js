const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    userID:{
        _id: { type: String, required: true },
        seq: { type: Number, default: 0 }
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    }
    
})
const userModel = new mongoose.model('hmsuser', userSchema);
module.exports = userModel;