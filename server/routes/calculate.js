var express = require('express');
var router = express.Router();

router.post('/add', function(req, res) {
  var math = req.body; //<--refers to body-parser
  var answer = parseInt(math.inputX) + parseInt(math.inputY);
  console.log('answer: ', answer);
  res.send(answer.toString());
});

router.post('/sub', function(req, res) {
  var math = req.body; //<--refers to body-parser
  var answer = parseInt(math.inputX) - parseInt(math.inputY);
  console.log('answer: ', answer);
  res.send(answer.toString());
});

router.post('/div', function(req, res) {
  var math = req.body; //<--refers to body-parser
  var answer = parseInt(math.inputX) / parseInt(math.inputY);
  console.log('answer: ', answer);
  res.send(answer.toString());
});

router.post('/mult', function(req, res) {
  var math = req.body; //<--refers to body-parser
  var answer = parseInt(math.inputX) * parseInt(math.inputY);
  console.log('answer: ', answer);
  res.send(answer.toString());
});



module.exports = router;
