var express = require('express');
var router = express.Router();
var data = require('../data/todo');
/* GET home page. */
router.get('/', function (req, res, next) {
  console.log(data);
  res.render('index', { data: data });
});

router.post('/addtodo', addToDo);
router.post('/removetodo/:id', removeToDo);


function addToDo(req, res, next) {
  console.log(req.body.todoin);
  var todoObject = {
    content: req.body.todoin,
    done: false,
    id: Date.now() % 1000000
  }
  data.push(todoObject);
  // res.render('./', { data: data });
  res.redirect('/');
}

function removeToDo(req, res, next) {
  let id = req.params.id;
  const index = data.findIndex(data => data.id === parseInt(id));
  data.splice(index, 1);
  // res.render('./', { data: data });
  res.redirect('/');
}

module.exports = router;
