var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/actors', function(req, res) {

  req.pool.getConnection(function(err,connection) {
    if (err) {
      res.sendStatus(500);
      return;
    }
    var query = "SELECT last_name, first_name FROM sakila.actor ORDER BY last_name ASC, first_name ASC";
    connection.query(query, function(err1, rows, fields) {
      connection.release(); // release connection
      if (err1) {
        res.sendStatus(500);
        return;
      }
      res.json(rows);
    });
  });
});

router.post('/actors', function(req, res) {
  // Extract actor data from request body
  var firstName = req.body.first_name;
  var lastName = req.body.last_name;

  // Perform validation if necessary

  // Insert actor into the database
  req.pool.getConnection(function(err, connection) {
    if (err) {
      res.sendStatus(500);
      return;
    }
    var query = "INSERT INTO sakila.actor (first_name, last_name) VALUES (?, ?)";
    connection.query(query, [firstName, lastName], function(err1, result) {
      connection.release(); // release connection
      if (err1) {
        res.sendStatus(500);
        return;
      }
      // Actor successfully added
      res.sendStatus(200);
    });
  });
});

module.exports = router;
