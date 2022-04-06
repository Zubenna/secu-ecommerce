const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true
    },

    price : {
        type: Number,
        default:0,
        required: true
    },

    Category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true
    },

    SubCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubCategory',
        required: false
    },

    countInStock: {
        type: Number,
        required: true,
        min: 0
    },

    brand: {
        type: String,
        required: true,
    },

    image: {
        type: String,
        data: Buffer,
        contentType: String,
        // required: [true, 'Upload your picture please'],
    },

    type: {
        type: String,  
    },

    rating: {
        type: Number
    }
  })

  module.exports = mongoose.model('Product', productSchema);