const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const pallet = require('../controllers/pallet');
const part = require('../controllers/part');

const app = express();
const port = process.env.PORT || 1337;

app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../client/dist')));

app.post('/pallet', (req, res) => {
  // do something to db
  pallet.insertPallet(req.body.palletname, req.body.palletpart, req.body.palletqty)
    .then(() => {
      res.sendStatus(200);
    });
});

app.get('/parts', (req, res) => {
  part.getParts()
    .then((data) => {
      res.send(data.rows);
    });
});
app.listen(port, () => {
  console.log(`(>^.^)> now listening on ${port}!`);
});
