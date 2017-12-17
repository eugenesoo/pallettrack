const express = require('express');
const app = express();
const port = PROCESS.ENV.PORT || 1337;

app.listen(port, () => {
  console.log(`(>^.^)> now listening on ${port}!`);
})
