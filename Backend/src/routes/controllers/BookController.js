const Book = require("../../models/BookScehma");
const addBook = async (req, res, next) => {
  let data = req.body;
  try {
    const ADD = await Book.create(data);
    res.status(200).send(ADD);
  } catch (error) {
    console.log(error);
    res.status(422).send(error);
  }
};
const getBook = async (req, res, next) => {
  try {
    const GET = await Book.find();
    if (!GET) {
      res.status(500).send(GET);
    } else {
      res.status(200).send(GET);
    }
  } catch (e) {
    res.status(422).send(e);
  }
};

const updateBook = async (req, res, next) => {
  const id = req.params.id;
  const data = req.body;
  try {
    const UPDATE = await Book.findByIdAndUpdate(id, data,{new:true});
    res.status(200).send(UPDATE);
  } catch (e) {
    res.status(422).send(e);
  }
};

const deleteBook = async (req, res, next) => {
  const id = req.params.id;
  try {
    const DELETE = await Book.findByIdAndDelete(id);
    if (!DELETE) {
      res.status(404).send("Book not found");
    } else {
      res.status(200).send(DELETE);
    }
  } catch (e) {
    res.status(422).send(e);
  }
};

module.exports = { addBook, getBook, deleteBook, updateBook };
