var express = require('express');
var router = express.Router();
const BookController =require("../controllers/BookController")
/* GET Books */
router.get('/',BookController.getBook);
// Add Book 
router.post('/',BookController.addBook)
//  Update Book 
router.put('/:id',BookController.updateBook)
// Delete book
router.delete('/:id',BookController.deleteBook)
module.exports = router;
