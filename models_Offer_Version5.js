const mongoose = require('mongoose');
const offerSchema = new mongoose.Schema({
  code: String,
  description: String,
  discountPercent: Number,
  validFrom: Date,
  validTo: Date,
  applicableLocations: [String],
  isActive: { type: Boolean, default: true }
});
module.exports = mongoose.model('Offer', offerSchema);