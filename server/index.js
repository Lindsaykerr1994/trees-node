require('dotenv').config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'));

app.use(express.json())

const treeRouter = require('../routes/trees');
app.use('/trees')

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
