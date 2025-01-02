const Firm = require('../models/Firm');
const Lawyer = require('../models/Lawyer');
const User = require('../models/User');

// Middleware to check if the user is authorized to make changes
const isAuthorized = async (req, res, next) => {
  const firm = await Firm.findById(req.params.id);
  if (!firm) {
    return res.status(404).json({ message: 'Firm not found' });
  }
  if (firm.user.toString() !== req.user.id) {
    return res.status(403).json({ message: 'User not authorized' });
  }
  next();
};

// Register a new firm
const registerFirm = async (req, res) => {
  try {
    const { name, email, phone, location, bio, specialization, availableHours, imageUrl= null, website= null } = req.body;

    // Check if firm already exists
    const existingFirm = await Firm.findOne({ email });
    if (existingFirm) {
      return res.status(400).json({ message: 'Firm with this email already exists' });
    }

    const newFirm = new Firm({ user: req.user.id, name, email, phone, location, bio, specialization, availableHours, imageUrl, website, isApproved: false });
    await newFirm.save();

    res.status(201).json({ message: 'Firm registered successfully. Awaiting admin approval.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while registering the firm' });
  }
};

const addLawyer = [isAuthorized, async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({email});
    const lawyer = await Lawyer.findOne({ user: user._id });
    console.log(lawyer);
    if (!lawyer && lawyer.role === "firm") {
        return res.status(400).json({ message: "Lawyer not Found" });
    }
  
    const firm = await Firm.findByIdAndUpdate(req.params.id, { $addToSet: { lawyers: user._id } }, { new: true });
  
    if (!firm) {
        return res.status(404).json({ message: "Firm not found" });
    }
  
    res.status(200).json(firm);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while adding lawyer to firm' });
    
  }
}];

const removeLawyer = [isAuthorized, async (req, res) => {
  try {
    const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user && user.role === "lawyer") {
      return res.status(400).json({ message: "Lawyer not Found" });
  }

  const firm = await Firm.findByIdAndUpdate(req.params.id, { $pull: { lawyers: user._id } }, { new: true });

  if (!firm) {
      return res.status(404).json({ message: "Firm not found" });
  }

  res.status(200).json(firm);
  } catch (error) {
     res.status(500).json({ message: 'An error occurred while removing lawyer from firm' }); 
  }
  
}];

// Update firm profile (add/remove lawyers, etc.)
const updateFirmProfile = [isAuthorized, async (req, res) => {
  try {
    const firmId= req.params.id;
    const firm = await Firm.findByIdAndUpdate(firmId, req.body, {new: true})
    if (!firm) {
      return res.status(404).json({ message: 'Firm not found' });
    } 
    res.status(200).json({ message: 'Firm profile updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while updating firm profile' });
  }
}];

// Get approved firms
const getApprovedFirms = async (req, res) => {
  try {
    const firms = await Firm.find({ isApproved: true });
    res.status(200).json(firms);
  } catch (error) {
    res.status(500).json({ message: 'An error occurred while fetching approved firms' });
  }
};

// Delete a firm
const deleteFirm = [isAuthorized, async (req, res) => {
  try {
    await Firm.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Firm deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}];

module.exports = {
  registerFirm,
  updateFirmProfile,
  addLawyer,
  removeLawyer,
  getApprovedFirms,
  deleteFirm
};
