const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const orderSchema = new Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'hmsuser'
    },
    orderItems: [
      {
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'hmsfood'
        }
      }
    ],
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0
    },
  }, {
    timestamps: true
  });
  


const orderModel = new mongoose.model('hmsoreder',orderSchema);
module.exports = orderModel;