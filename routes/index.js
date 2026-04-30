var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("Hello");
  res.render('index', { title: 'Express' });
});


/* GET brew route. */
router.get('/brew', function(req, res, next) {
  const drinkW = req.query.drink;

  if (drinkW === 'tea') {
    res.send('A delicious cup of tea!');
  } else if (drinkW === 'coffee') {
    res.status(418).send("I'm a teapot");
  } else {
    res.status(400).send('Bad Request');
  }
});

var storage = "first";
router.post('/pass-it-on', function(req, res, next) {
  var messages = req.body.message;

  if (!messages || messages.trim() === '') {
    res.status(400);
  } else {
    res.send(storage);
    storage = messages;
  }
});

router.get('/cookie', function(req, res, next) {

  var num = parseInt(req.cookies.task3_1) || 0;
  num++;
  res.cookie('task3_1', num, { httpOnly: true });
  res.send(`Nothing should sent`);
});

router.post('/combine', function(req, res, next) {
  var line = req.body.lines;
  var suffixs = req.body.suffix;

  const combinedLines = line.map(line => line + suffixs);
  res.send(combinedLines.join('\n'));
});


module.exports = router;
