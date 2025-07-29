require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const path = require('path');

const app = express();

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI }),
  })
);

app.use('/', require('./routes/auth'));
app.use('/admin', require('./routes/admin'));
app.use('/tshirts', require('./routes/tshirts'));
app.use('/user', require('./routes/user'));
app.use('/otp', require('./routes/otp'));

app.get('/', (req, res) => {
  res.render('index', { user: req.session.user });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Memezy running on port ${PORT}`));