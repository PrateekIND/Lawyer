const Lawyer = require('../models/Lawyer');
const Review = require('../models/Review'); // Assuming Review model is already created

// Register a new lawyer (or firm)
const registerLawyer = async (req, res) => {
  try {
    const { name, email, phone, location, bio, role, specialization, availableHours } = req.body;

    const existingLawyer = await Lawyer.findOne({ email });
    if (existingLawyer) {
      return res.status(400).json({ message: "Lawyer with this email already exists" });
    }

    const newLawyer = new Lawyer({ name, email, phone, location, bio, role, specialization, availableHours });
    await newLawyer.save();

    res.status(201).json({ message: "Lawyer registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "An error occurred while registering the lawyer" });
  }
};



// Update lawyer profile
const updateLawyerProfile = async (req, res) => {
  try {
    const { lawyerId } = req.params;
    const lawyer = await Lawyer.findByIdAndUpdate(lawyerId, req.body,  { new: true });
    res.status(200).json({ message: "Lawyer profile updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "An error occurred while updating lawyer profile" });
  }
};

// Get lawyer's reviews
// const getLawyerReviews = async (req, res) => {
//   try {
//     const { lawyerId } = req.params;

//     const reviews = await Review.aggregate([
//       { $match: { lawyerId: mongoose.Types.ObjectId(lawyerId) } },
//       {
//         $group: {
//           _id: '$lawyerId',
//           averageRating: { $avg: '$rating' },
//           reviews: { $push: { clientId: '$clientId', comment: '$comment', rating: '$rating' } },
//         },
//       },
//     ]);

//     if (reviews.length === 0) {
//       return res.status(404).json({ message: 'No reviews found for this lawyer' });
//     }

//     res.status(200).json(reviews[0]);
//   } catch (error) {
//     res.status(500).json({ message: "An error occurred while fetching reviews" });
//   }
// };

module.exports = {
  registerLawyer,
  updateLawyerProfile,
};
