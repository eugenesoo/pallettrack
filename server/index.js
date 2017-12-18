const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const pallet = require('../controllers/pallet');
const part = require('../controllers/part');
const process = require('../controllers/process');

const app = express();
const port = 1337;

app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../client/dist')));

app.post('/pallet', (req, res) => {
  pallet.insertPallet(req.body.palletname, req.body.palletpart, req.body.palletqty)
    .then(() => {
      res.sendStatus(200);
    });
});

app.get('/pallets', (req, res) => {
  process.getPallets()
    .then((data) => {
      res.send(data.rows);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get('/parts', (req, res) => {
  part.getParts()
    .then((data) => {
      res.send(data.rows);
    });
});

app.listen(port, () => {
  console.log('(>^.^)> now listening!');
});
