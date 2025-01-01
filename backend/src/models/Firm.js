const mongoose = require('mongoose');

const firmSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    location: {
      type: String, // City or region where the firm is located
      required: true,
    },
    bio: {
      type: String, // A brief description of the firm
      required: true,
    },
    lawyers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lawyer', // Refers to the lawyers associated with the firm
      },
    ],
    specialization: {
      type: [String], // List of specializations offered by the firm
      required: true,
    },
    availableHours: {
      type: String, // E.g., "9 AM - 6 PM"
      required: true,
    },
    imageUrl: {
      type: String, // Firm's logo or profile image URL
    },
    website: {
      type: String, // Firm's official website
    },
  },
  { timestamps: true }
);

const Firm = mongoose.model('Firm', firmSchema);

module.exports = Firm;
