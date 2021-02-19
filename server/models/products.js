const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductScheme = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  count: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

module.exports  = mongoose.model('products', ProductScheme);
