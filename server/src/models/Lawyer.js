const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LawyerSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  bio: {
    type: String, // Lawyer's bio
  },
  phone: {
    type: String,
    required: true,
  },
  location: {
    type: String, // City or region where the firm is located
    required: true,
  },
  role: {
    type: String,
    enum: ['individual', 'firm'], // Role can be 'individual' or 'firm'
    required: true,
  },
  specialization: {
    type: [String], // List of specializations like "Family Law", "Criminal Law", etc.
    required: true,
  },
  availableHours: {
    type: String, // E.g., "9 AM - 5 PM"
    required: true,
  },
  isApproved: {
    type: Boolean,
    default: false, // By default, the lawyer is not approved
  },
  // imageUrl: {
  //   type: String, // Lawyer's profile image URL
  // },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Lawyer', LawyerSchema);
