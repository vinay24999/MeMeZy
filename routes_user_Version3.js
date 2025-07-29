const express = require('express');
const router = express.Router();
const User = require('../models/User');

function isUser(req, res, next) {
  if (req.session.user) return next();
  res.redirect('/login');
}

router.get('/profile', isUser, async (req, res) => {
  const user = await User.findById(req.session.user._id);
  res.render('profile', { user });
});

module.exports = router;