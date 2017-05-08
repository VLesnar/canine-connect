const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const app = express();

app.use(compression());

app.set('views', `${__dirname}/../client/template`);

app.use(cookieParser());

app.listen(port, (err) => {
  if (err) {
    throw err;
  }

  console.log(`Listening on port ${port}`);
});
