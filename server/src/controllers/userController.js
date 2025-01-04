const Lawyer = require('../models/Lawyer');
//const Review = require('../models/Review'); // Assuming Review model is already created

// Search for lawyers based on location or specialization
const searchLawyers = async (req, res) => {
    try {
      const { location, specialization } = req.query;
  
      const searchCriteria = {};
      if (location) searchCriteria.location = location;
      if (specialization) searchCriteria.specialization = { $in: specialization.split(',') };
  
      const lawyers = await Lawyer.find(searchCriteria);
      res.status(200).json(lawyers);
    } catch (error) {
      res.status(500).json({ message: "An error occurred while searching for lawyers" });
    }
  };
  
  // Get details of a lawyer
  const getLawyerDetails = async (req, res) => {
    try {
      const { lawyerId } = req.params;
  
      const lawyer = await Lawyer.findById(lawyerId);
      if (!lawyer) {
        return res.status(404).json({ message: "Lawyer not found" });
      }
  
      res.status(200).json(lawyer);
    } catch (error) {
      res.status(500).json({ message: "An error occurred while fetching lawyer details" });
    }
  };

  // Search for firms based on filters (location and specialization)
const searchFirms = async (req, res) => {
    try {
      const { location, specialization } = req.query;
  
      // Build search criteria based on query parameters
      const searchCriteria = {};
      if (location) searchCriteria.location = location;
      if (specialization) searchCriteria.specialization = { $in: specialization.split(',') };
  
      // Search for firms with the provided criteria
      const firms = await Firm.find(searchCriteria);
      res.status(200).json(firms);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while searching for firms' });
    }
  };
  
  // Get details of a specific firm, including its lawyers
  const getFirmDetails = async (req, res) => {
    try {
      const { firmId } = req.params;
  
      // Fetch firm details and populate lawyers field
      const firm = await Firm.findById(firmId).populate('lawyers');
      if (!firm) {
        return res.status(404).json({ message: 'Firm not found' });
      }
  
      res.status(200).json(firm);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while fetching firm details' });
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
    searchLawyers,
    getLawyerDetails,
  };