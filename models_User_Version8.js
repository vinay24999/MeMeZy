const mongoose = require('mongoose');
const addressSchema = new mongoose.Schema({
  addressLine: String,
  city: String,
  state: String,
  pin: String,
  lat: Number,
  lng: Number,
  isDefault: { type: Boolean, default: false }
});
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  phone: String,
  isEmailVerified: { type: Boolean, default: false },
  otp: Number,
  otpExpiry: Number,
  addresses: [addressSchema],
  wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tshirt' }],
  role: { type: String, enum: ['user', 'admin'], default: 'user' }
});
module.exports = mongoose.model('User', userSchema);