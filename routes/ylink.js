var express = require('express');
var router = express.Router();
require('dotenv').config();
var mongoDB = require('../lib/db/mongo.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Events' });
});

router.get('/phone', function(req, res, next) {
  console.log(req.query);
  mongoDB.connect();
  console.log(process.env.DB_HOST);
  
})
module.exports = router;
