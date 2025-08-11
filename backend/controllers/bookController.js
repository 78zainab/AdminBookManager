// Creating controller means seperating logic in the controller file (bookController.js)
// bookRoutes.js will only handle routing...
const mongoose = require('mongoose');
const Book = require('../models/Book');

const getBook = async(req, res) => {
  // find({###I am an empty object, means fetching all data from books collection###}) 
  try{
    const books = await Book.find({});
    res.status(200).json({success: true, data: books});
  }
  catch(error){
    console.log("error in fetching prodducts:", error.message);
    res.status(500).json({success: false, message: "server error"});
  }
} 
const postBook = async (req, res) => {
  const book = req.body;
  if (!book.title || !book.author) {
    return res.status(400).json({ success: false, message: "Please provide all fields." });
  }
  const newBook = new Book(book);
  try {
    await newBook.save();
    res.status(201).json({ success: true, data: newBook });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
}
const putBook = async(req, res) => {
  const {id} = req.params; 
  const book = req.body;
  // if asked id is not in the database:
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({success: false, message: "Invalid Book"});
  }
  try{
    // object book is going to be changed... 
    // comming from req.body...
    const updatedBook = await Book.findByIdAndUpdate(id, book, {new: true});
    res.status(200).json({success: true, data: updatedBook});
  }
  catch(error) {
    res.status(500).json({success: false, message: "server error"});
  }
}
const deleteBook = async(req, res) => {
  const {id} = req.params;
  try{
    await Book.findByIdAndDelete(id);
    res.status(200).json({success: true, message: "Book Deleted"})
  }
  catch (error){
    res.status(500).json({success: false, message: "server error"});
  }
}
module.exports = {
    getBook, postBook, putBook, deleteBook
};