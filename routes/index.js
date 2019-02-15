var express = require('express');
var router = express.Router();
var mongoDB = require('../lib/db/mongo.js');
const { check, validationResult } = require('express-validator/check');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express DEBUG' });
});

router.post('/userlogin', function(req, res) {
  console.log("Login Clicked");
  var body = req.body;
  console.log(body);
  mongoDB.save();
})

/**
* Register user page
*/
router.post('/register', [
  check('email').isEmail()
], (req, res, next) => {

  const errors = validationResult(req);
  //Get values
  let email = req.body.regEmail;
  let firstname = req.body.regFirstname;
  let lastname = req.body.regLastname;
  let password = req.body.pwd;
  let rpassword = req.body.rpwd;

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

 console.log(" FIRST " + firstname);
});

module.exports = router;
