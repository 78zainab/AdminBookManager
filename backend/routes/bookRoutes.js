const express = require('express');
const {getBook, postBook, putBook, deleteBook} = require("../controllers/bookController");
//import { postBook, getBook, putBook, deleteBook } from '../controllers/bookController';
const router = express.Router();

// I had to replace app by router as the bookRouter.js is router module not the main Express app
// instead of working with actual express app, 
// here working with router instance
// and then in server.js, connecting like this: 
// app.use("/api/books", bookRoutes);
// ####################################################################
// no need to write /api/books again bookRoutes.js as it's already 
// setup in server.js app.use("api/books, bookRoutes") -> it set's the base route
// bookRoutes.js defines the endpoints under that base, 

// router.get("/", (req, res) => {
//   res.send("📡 Server is ready");
// });
// router.get("/books", async (req, res) => {
//   const books = await Book.find();
//   res.json(books);
// });
// API routes
// app.use('/api/books', bookRoutes);

router.get("/", getBook);
// Fallback POST (you can remove if already handled in routes)
router.post("/", postBook);
// creating an endpoint for updating a book
// I am using put method here as I am going to update all the fields of specific id
router.put("/:id", putBook);
router.delete("/:id", deleteBook);

module.exports = router;
