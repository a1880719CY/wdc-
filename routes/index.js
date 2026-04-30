
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var lastDate = "";
router.get('/last.txt', function(req, res, next) {
  res.send(lastDate);
  lastDate = Date().toString();
});

var numVisit = 0;
router.get('/color.html', function(req, res, next) {
  var pageColor = "";
  var sceneNum = numVisit%4;
  switch (sceneNum) {
    case 0:
      pageColor = "red";
      break;

    case 1:
      pageColor = "yellow";
      break;

    case 2:
      pageColor = "green";
      break;

    case 3:
      pageColor = "blue";
      break;

  }
  numVisit++;
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <link rel="stylesheet" href="/stylesheets/style.css">
  </head>
  <body>
      <h1 style="color:${pageColor};">${pageColor}</h1>
  </body>
  </html>
  `);

});

var numVisit2 = 0;
router.get('/color.txt', function(req, res, next) {
  var pageColor = "";
  var sceneNum = numVisit2%4;
  switch (sceneNum) {
    case 0:
      pageColor = "red";
      break;

    case 1:
      pageColor = "yellow";
      break;

    case 2:
      pageColor = "green";
      break;

    case 3:
      pageColor = "blue";
      break;

  }
  numVisit2++;
  res.send(pageColor);

});

var numVisitLog = 0;
var visitLogArray = [];
router.get('/log.html', function(req, res, next) {

  let webPage = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <link rel="stylesheet" href="/stylesheets/style.css">
  </head>
  <body>
    <ul class="timeLog">`;
  let webEndP = `</ul>
  </body>
  </html>
  `;

  const cuDate = Date().toString();
  visitLogArray.push(cuDate);
  numVisitLog++;
  for (let i = 0; i < numVisitLog; i++){
    webPage+=`<li>${visitLogArray[i]}</li>`;
  }

  webPage+=webEndP;

  res.send(webPage);


});


var visitLogArray2 = [];
router.get('/log.json', function(req, res, next) {
  const cuDate = Date().toString();
  visitLogArray2.push(cuDate);

  res.send(visitLogArray2);
});

router.get('/log-ro.json', function(req, res, next) {

  res.send(visitLogArray2);
});

var acceptCalled = false;
router.get('/accept', function(req, res, next) {
  acceptCalled = true;

  res.sendStatus(200);
});

router.get('/content.ajax', function(req, res, next) {

  if (acceptCalled){

    res.send(`<p>ababababaa</p><p>oof</p>`);

  } else{

    res.sendStatus(403);

  }
});

module.exports = router;