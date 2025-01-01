const mongoose = require("mongoose");

const lawyerSchema = new mongoose.Schema(
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
      type: String, // city or area where the lawyer practices
      required: true,
    },
    bio: {
      type: String, // A short bio about the lawyer
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
    // imageUrl: {
    //   type: String, // Lawyer's profile image URL
    // },
  },
  {
    timestamps: true,
  }
);

const Lawyer = mongoose.model("Lawyer", lawyerSchema);

module.exports = Lawyer;
