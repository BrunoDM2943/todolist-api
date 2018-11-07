const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://appnode:123456ab@ds141902.mlab.com:41902/bdm-sandbox';

// Database Name
const dbName = 'bdm-sandbox';

var db
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  db = client.db()

});

module.exports = {
    getDb: function(){
        return db;
    }
}

