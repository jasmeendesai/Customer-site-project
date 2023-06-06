const mongoose = require('mongoose')


const cardSchema = new mongoose.Schema({
    cardNumber: {
        type: String,
        unique: true,
        required: true
      },
      cardType: {
        type: String,
        enum: ['REGULAR', 'SPECIAL'],
        required: true
      },
      customerName: {
        type: String,
        required: true
      },
      status: {
        type: String,
        enum: ['ACTIVE', 'INACTIVE'],
        default: 'ACTIVE'
      },
      vision: String
      ,
      customerID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customer',
        required: true
      }

},{timestamps : true})


module.exports = mongoose.model("card",cardSchema);
