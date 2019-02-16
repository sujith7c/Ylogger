var MongoClient = require('mongodb').MongoClient
const assert = require('assert');
require('dotenv').config();

var monogoDB = {};

const url = process.env.DB_HOST;
const dbName = process.env.DB;
// Create a new MongoClient
const client = new MongoClient(url);
var db;

console.log("URL" + url)
monogoDB.connect = function() {
  // Use connect method to connect to the Server
  MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    db = client.db(dbName);
    console.log("DB NAME" + dbName);
  });
}

monogoDB.save = function(collection, document){
  const MongoCollection = db.collection(collection);
  MongoCollection.insertOne(document)
    .then(() =>{ console.log("Inserted to test Collection")})
    .catch(err => { console.log("Error Occured")});
}

monogoDB.readOne = function(collection,query) {
  const MongoCollection = db.collection(collection);
  MongoCollection.findOne(query)
    .then( item => {
      //print the returned item
      console.log(item);
    })
    .catch(err => { console.log("Error Occured in Reading Document! ")});
}

monogoDB.read = function(collection, options, query) {
  const MongoCollection = db.collection(collection);
  MongoCollection.find(query, options)
    .then(items => {console.log(items)})
    .catch(err => {console.log("Error in reading! ") })
}
monogoDB.close = function(){
  client.close();
}



module.exports = monogoDB;

