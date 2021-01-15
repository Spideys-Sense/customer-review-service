const express = require('express');
const app = express();
const db = require('../database/index');
const {Reviews, Items} = require('../database/Model');
const path = require('path');

const PORT = 1111;

//displays client
app.use(express.static(path.join(__dirname, '../client/public')))

//connects & listens to server on designated port
app.listen(PORT, () => {
  console.log('Server listening on port: ' + PORT);
})