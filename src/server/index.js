const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./router');
const cookieParser = require('cookie-parser')

const PORT = 5000;
const BG_URL =
  'mongodb+srv://Anime:anime123@cluster0.4omte.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const app = express();

app.use(express.json());
app.use(cookieParser())
app.use(cors());
app.use('/api', router);

const start = async () => {
  try {
    await mongoose.connect(BG_URL);
    app.listen(PORT, () => console.log(`Server start ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
