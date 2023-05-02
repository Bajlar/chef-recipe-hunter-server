const express = require('express');
const app = express();
var cors = require('cors');
const port = process.env.PORT || 5000;

const chefs = require('./data/chefs.json');

app.use(cors())

app.get('/', (req, res) => {
  res.send('Chef Recipe Hunter Running!')
})

app.get('/chefs', (req, res) => {
  res.send(chefs);
})

app.listen(port, () => {
  console.log(`Chef Recipe Hunter on port ${port}`)
})