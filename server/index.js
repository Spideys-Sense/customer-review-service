const express = require('express');
const app = express();
const db = require('../database/index');
const {Reviews, Items} = require('../database/Model');

const PORT = 1111;

app.listen(PORT, () => {
  console.log('Server listening on port: ' + PORT);
})