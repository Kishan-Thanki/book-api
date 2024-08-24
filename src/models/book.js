const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
      trim: true,
      index: true 
    },

    author: {
      type: String,
      required: true,
      trim: true
    },

    genre: {
      type: String,
      enum: ['Fiction', 'Non-Fiction', 'Thriller', 'Romance', 'Science Fiction'],
      required: true
    },

    publicationDate: {
      type: Date,
      required: true
    },

    description: {
      type: String,
      trim: true
    },

    isbn: {
      type: String,
      unique: true
    },

    coverImage: {
      type: String,
      trim: true,
      match: /^https?:\/\/.*\.(jpg|jpeg|png|gif)$/i 
    }

}, {
    timestamps: true
});

module.exports = mongoose.model('Book', bookSchema);