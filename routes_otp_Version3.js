const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('otp', { email: req.session.tempUser ? req.session.tempUser.email : '' });
});

// (Add OTP POST logic here when ready)

module.exports = router;