var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.use((req, res, next) => {

  if (req.method === 'POST') {
    console.log('POST from a user');
    const contentType = req.headers['content-type'];

    if (contentType !== 'application/json') {
      return res.status(412).send('Precondition Failed: Content-Type must be application/json');
    }
  }
  next();
});

module.exports = router;
