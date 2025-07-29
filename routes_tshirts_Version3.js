const express = require('express');
const router = express.Router();
const Tshirt = require('../models/Tshirt');

router.get('/', async (req, res) => {
  const tshirts = await Tshirt.find();
  res.render('tshirts', { tshirts, user: req.session.user });
});

module.exports = router;