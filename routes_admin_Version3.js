const express = require('express');
const router = express.Router();
const Tshirt = require('../models/Tshirt');

function isAdmin(req, res, next) {
  if (req.session.user && req.session.user.role === 'admin') return next();
  res.redirect('/login');
}

router.get('/', isAdmin, async (req, res) => {
  const tshirts = await Tshirt.find();
  res.render('admin', { user: req.session.user, tshirts });
});

router.post('/add-tshirt', isAdmin, async (req, res) => {
  const { title, description, language, imageURL, price } = req.body;
  await Tshirt.create({ title, description, language, imageURL, price, createdBy: req.session.user._id });
  res.redirect('/admin');
});

module.exports = router;