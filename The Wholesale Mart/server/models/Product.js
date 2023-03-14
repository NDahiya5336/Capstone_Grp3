const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 20,
  },
  description: {
    type: String,
    required: true,
    min: 40,
  },
  category: {
    type: String,
    required: true,
  },
  images: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  inStock: {
    type: Number,
    min: 0,
  },
  rating: {
    type: Number,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
