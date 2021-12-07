const express = require('express');;
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();
dotenv.config();

app.use(cors({ origin: '*', credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

const port = process.env.PORT || 4000;

app.listen(port, () => { console.log('this app is listening on port ', port) });

module.exports = app;
