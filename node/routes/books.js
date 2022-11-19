const express = require("express");
const router = express.Router();
const Book = require("../models/book");

// Get all books
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one book
router.get("/:id", getBook, (req, res) => {
  res.json(res.book);
});

// Creating one
router.post("/", async (req, res) => {
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    parution: req.body.parution,
    country: req.body.country,
    genre: req.body.genre,
    moviment: req.body.moviment,
    cover: req.body.cover,
    reading: req.body.reading,
  });
  try {
    const newBook = await book.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update
router.patch("/:id", getBook, async (req, res) => {
  if (req.body.title != null) {
    res.book.title = req.body.title;
  }
  if (req.body.author != null) {
    res.book.author = req.body.author;
  }
  if (req.body.parution != null) {
    res.book.parution = req.body.parution;
  }
  if (req.body.country != null) {
    res.book.country = req.body.country;
  }
  if (req.body.genre != null) {
    res.book.genre = req.body.genre;
  }
  if (req.body.moviment != null) {
    res.book.moviment = req.body.moviment;
  }
  if (req.body.cover != null) {
    res.book.cover = req.body.cover;
  }
  if (req.body.reading != null) {
    res.book.reading = req.body.reading;
  }
  try {
    const updatedBook = await res.book.save();
    res.json(updatedBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete
router.delete("/:id", getBook, async (req, res) => {
  try {
    await res.book.remove();
    res.json({ message: "Deleted Book" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getBook(req, res, next) {
  let book;
  try {
    book = await Book.findById(req.params.id);
    if (book == null) {
      return res.status(404).json({ message: "Cannot find book" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.book = book;
  next();
}

module.exports = router;
