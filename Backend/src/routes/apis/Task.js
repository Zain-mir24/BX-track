var express = require('express');
var router = express.Router();
const TaskController =require("../controllers/TaskController")
/* GET Tasks from db. */
router.get('/Retrieve',TaskController.GetTask);
// Add task in the db
router.post('/add',TaskController.AddTask)

module.exports = router;
