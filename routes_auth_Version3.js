const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

// Registration form
router.get('/register', (req, res) => res.render('register'));

// Registration action
router.post('/register', async (req, res) => {
  const { name, email, password, phone } = req.body;
  const hash = await bcrypt.hash(password, 10);
  try {
    const user = new User({ name, email, password: hash, phone, isEmailVerified: false, role: 'user' });
    await user.save();
    req.session.tempUser = { email };
    res.redirect('/otp');
  } catch (e) {
    res.render('register', { error: 'Email already exists' });
  }
});

// Login form
router.get('/login', (req, res) => res.render('login'));

// Login action
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.render('login', { error: 'User not found' });
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.render('login', { error: 'Wrong password' });
  req.session.user = { _id: user._id, email: user.email, name: user.name, role: user.role };
  res.redirect(user.role === 'admin' ? '/admin' : '/user/profile');
});

// Logout
router.get('/logout', (req, res) => {
  req.session.destroy(() => res.redirect('/'));
});

module.exports = router;