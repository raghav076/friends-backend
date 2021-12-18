const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');

//routes
const routes = require('./src/routes/routes');

const app = express();
dotenv.config();

app.use(cors({ origin: '*', credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASS}@friends.nycez.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("database connection established"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 4000;

app.use('/', routes);

app.listen(port, () => { console.log('this app is listening on port ', port) });

module.exports = app;
