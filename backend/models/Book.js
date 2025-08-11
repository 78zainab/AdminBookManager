const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: String,
  ImageURL: {type: String, required: false, default: ""}
} , {
  timestamps: true
}
);

module.exports = mongoose.model('Book', bookSchema);
