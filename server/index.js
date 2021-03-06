require('dotenv').config();
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

app.post('/pallets', (req, res) => {
  pallet.insertPallet(req.body.palletname, req.body.palletpart, req.body.palletqty)
    .then(() => {
      res.sendStatus(200);
    });
});

app.patch('/pallets', (req, res) => {
  pallet.updatePallet(req.body.palletid)
    .then((results) => {
      res.send(results);
    })
    .catch((err) => {
      res.send(err);
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

app.post('/parts', (req, res) => {
  part.insertPart(req.body.partName)
    .then(() => res.send(200))
    .catch(err => res.send(err));
});

app.get('/processes', (req, res) => {
  process.getProcesses()
    .then((data) => {
      res.send(data.rows);
    });
});

app.listen(port, () => {
  console.log('(>^.^)> now listening!');
});
