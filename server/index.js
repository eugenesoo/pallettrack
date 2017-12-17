const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 1337;

app.use(express.static(path.resolve(__dirname, '../client/dist')));

app.listen(port, () => {
  console.log(`(>^.^)> now listening on ${port}!`);
});
