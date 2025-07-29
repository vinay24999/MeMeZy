const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  products: [{ tshirt: { type: mongoose.Schema.Types.ObjectId, ref: 'Tshirt' }, qty: Number }],
  total: Number,
  address: Object,
  location: { lat: Number, lng: Number, pin: String },
  paymentStatus: String,
  paymentId: String,
  status: String,
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Order', orderSchema);