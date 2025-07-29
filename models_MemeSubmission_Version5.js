const mongoose = require('mongoose');
const memeSubmissionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  memeText: String,
  language: String,
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  adminComment: String,
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('MemeSubmission', memeSubmissionSchema);