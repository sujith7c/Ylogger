var express = require('express');

var router = express.Router();
require('dotenv').config();
var mongoDB = require('../lib/db/mongo.js');
var validator = require('validator');

var usersController = {};

/**
 * Validate user email
 */

 usersController.validateUserMail = function(email) {

 }

 /**
  * Is uniq user
  */
 usersController.uniqUser = function(email) {

 }

 /**
  * Check full name
  */

  usersController.checkName = function(){

  }

  /**
   * Get Name by email
   */
  usersController.getID = function() {

  }

  usersController.save = function(record) {
    
  }
  module.exports = usersController;