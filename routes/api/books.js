const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

//Book model
const Book = require("../../models/Book");

router.get("/", auth, (req, res) => {
  Book.find().then(books => res.json(books));
});

router.post("/", auth, (req, res) => {
  const newBook = new Book({
    title: req.body.title,
    author: req.body.author,
    publisher: req.body.publisher,
    content: req.body.content
  });

  newBook.save().then(book => res.json(book));
});

router.delete("/:id", auth, (req, res) => {
  Book.findById(req.params.id)
    .then(book => book.remove().then(() => res.json("Borrado.")))
    .catch(err => res.status(404).json("No borrado"));
});

module.exports = router;
