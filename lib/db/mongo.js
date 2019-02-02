var MongoClient = require('mongodb').MongoClient
const assert = require('assert');


var monogoDB = {};

const url = process.env.DB_HOST;
const dbName = process.env.DB;
// Create a new MongoClient
const client = new MongoClient(url);

monogoDB.connect = function() {
  // Use connect method to connect to the Server
  client.connect(function(err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    client.close();
  });
}

module.exports = monogoDB;

