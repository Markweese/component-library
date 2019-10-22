// Import config
const keys = require('./keys');

// Express app setup
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// MongoDB Client setup
const mongoUrl = `mongodb://${keys.mongoUser}:${keys.mongoPass}@ds${keys.mongoHost}.mlab.com:${keys.mongoPort}/${keys.dbName}`;
const MongoClient = require('mongodb').MongoClient;

// Express route handlers
app.get('/', (req, res) => {
  res.send('Lib or Builder');
});

app.get('/library', async (req, res) => {
  console.log(mongoUrl);
  let result = await MongoClient.connect(mongoUrl, function(err, db) {
    if (err) throw err;
    var dbo = db.db(keys.dbName);
    dbo.collection("components").findOne({}, function(err, result) {
      if (err) throw err;
      res.send(result);
    });
  });
});

app.get('/builder', (req, res) => {
  res.send('Builder');
});

app.post('/builder', async (req, res) => {
  const tags = req.body.tags;
  const name = req.body.name;
  const type = req.body.type;
  const styles = req.body.styles;
  const markup = req.body.markup;

  res.send({working:true});
});

app.listen(5000, err => {
  console.log('listening on port 5000');
});
