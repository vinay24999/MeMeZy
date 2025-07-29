const mongoose = require('mongoose');
const tshirtSchema = new mongoose.Schema({
  title: String,
  description: String,
  language: String,
  imageURL: String,
  price: Number,
  available: { type: Boolean, default: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  reviews: [{ user: String, comment: String, stars: Number }]
});
module.exports = mongoose.model('Tshirt', tshirtSchema);