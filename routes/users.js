var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'User' });
});

/* GET Users List Page. */
router.get('/list', function(req, res, next) {
  res.render('pages/users/list', { title: 'User Management' });
});


module.exports = router;
