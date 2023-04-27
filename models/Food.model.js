const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const foodSchema = new Schema({
    foodID:{
        _id: { type: String, required: true },
        seq: { type: Number, default: 0 }
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})
const foodItem = new mongoose.model('hmsfood', foodSchema);
module.exports = foodItem;