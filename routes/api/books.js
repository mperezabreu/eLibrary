const express = require("express");
const router = express.Router();

//Book model
const Book = require("../../models/Book");

router.get("/", (req, res) => {
  Book.find().then(books => res.json(books));
});

router.post("/", (req, res) => {
  const newBook = new Book({
    title: req.body.title
  });

  newBook.save().then(book => res.json(book));
});

router.delete("/:id", (req, res) => {
  Book.findById(req.params.id)
    .then(book => book.remove().then(() => res.json("Borrado.")))
    .catch(err => res.status(404).json("No borrado"));
});

module.exports = router;
