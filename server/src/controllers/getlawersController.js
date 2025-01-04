const Lawyer = require('../models/Lawyer');
const Firm = require('../models/Firm');

const getFirmsAndLawyers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    // Fetch lawyers and firms with limited fields and pagination
    const [lawyers, firms, totalLawyers, totalFirms] = await Promise.all([
      Lawyer.find({ isApproved: true })
        .select('user bio phone role specialization availableHours')
        .skip(skip)
        .limit(limit)
        .lean(),
      Firm.find({ isApproved: true })
        .select('name email phone location bio specialization availableHours')
        .skip(skip)
        .limit(limit)
        .lean(),
      Lawyer.countDocuments({ isApproved: true }),
      Firm.countDocuments({ isApproved: true }),
    ]);

    const totalPages = Math.ceil((totalLawyers + totalFirms) / limit);

    res.status(200).json({
      success: true,
      data: {
        lawyers,
        firms,
      },
      meta: {
        currentPage: page,
        totalPages,
        totalLawyers,
        totalFirms,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while fetching data.',
      error: error.message,
    });
  }
};

const searchFirmsAndLawyers = async (req, res) => {
    try {
      const { specialization, location, page = 1, limit = 10 } = req.query;
      const skip = (parseInt(page) - 1) * parseInt(limit);
  
      // Build dynamic query filters for lawyers and firms
      const lawyerFilter = { isApproved: true };
      const firmFilter = { isApproved: true };
  
      if (specialization) {
        lawyerFilter.specialization = { $regex: specialization, $options: 'i' }; // Case-insensitive regex
        firmFilter.specialization = { $regex: specialization, $options: 'i' };
      }
  
      if (location) {
        firmFilter.location = { $regex: location, $options: 'i' }; // Location filter only applies to firms
      }
  
      // Fetch lawyers and firms concurrently
      const [lawyers, firms, totalLawyers, totalFirms] = await Promise.all([
        Lawyer.find(lawyerFilter)
          .select('user bio phone role specialization availableHours')
          .skip(skip)
          .limit(parseInt(limit))
          .lean(),
        Firm.find(firmFilter)
          .select('name email phone location bio specialization availableHours')
          .skip(skip)
          .limit(parseInt(limit))
          .lean(),
        Lawyer.countDocuments(lawyerFilter),
        Firm.countDocuments(firmFilter),
      ]);
  
      const totalResults = totalLawyers + totalFirms;
      const totalPages = Math.ceil(totalResults / limit);
  
      res.status(200).json({
        success: true,
        data: {
          lawyers,
          firms,
        },
        meta: {
          currentPage: parseInt(page),
          totalPages,
          totalResults,
          totalLawyers,
          totalFirms,
        },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: 'An error occurred while searching.',
        error: error.message,
      });
    }
  };

  const getLawyer = async (req, res) => {
    try {
      const lawyerId = req.params.id;
  
      const lawyer = await Lawyer.findById(lawyerId)    
        .populate('user', 'name email')
        .select('user bio phone location role specialization availableHours')
        .lean();    
      res.status(200).json(lawyer);
    }catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: 'An error occurred while fetching data.',
        error: error.message,
      });
    }

  }

  const getFirm = async (req, res) => {
    try {
      const firmId = req.params.id;
  
      const firm = await Firm.findById(firmId)
        .select('name email phone location bio specialization availableHours')
        .lean();
  
      res.status(200).json(firm);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: 'An error occurred while fetching data.',
        error: error.message,
      });
    }
  }

module.exports = { getFirmsAndLawyers, searchFirmsAndLawyers, getLawyer, getFirm };
