const keys = require('./keys');

// Express app setup
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// MongoDB Client setup
const mongoUrl = `mongodb://${keys.mongoUsername}:${keys.mongoPassword}@${keys.mongoHostname}:${keys.mongoPort}/${keys.mongoDatabase}`
const MongoClient = require('mongodb').MongoClient.connect(mongoUrl, (err, db) => {
  if (err) {
    console.log('Lost MongoDB connection');
  } else {
    return db.db('component-library');
  }
});

// Express route handlers
app.get('/', (req, res) => {
  res.send('Lib or Builder');
});

app.get('/library', async (req, res) => {
  const components = await MongoClient.collection('components').find({},{'_id':0, 'html':1, 'css':1});
  res.send(components);
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
  console.log('listening');
});
