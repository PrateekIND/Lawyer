const Firm = require('../models/Firm');
const Lawyer = require('../models/Lawyer');

// Register a new firm
const registerFirm = async (req, res) => {
  try {
    const { name, email, phone, location, bio, specialization, availableHours, imageUrl, lawyers } = req.body;

    // Check if firm already exists
    const existingFirm = await Firm.findOne({ email });
    if (existingFirm) {
      return res.status(400).json({ message: 'Firm with this email already exists' });
    }

    const newFirm = new Firm({ name, email, phone, location, bio, specialization, availableHours, imageUrl, lawyers });
    res.status(201).json({ message: 'Firm registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while registering the firm' });
  }
};

const addLawyer = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user && user.role === "lawyer") {
      return res.status(400).json({ message: "Lawyer not Found" });
  }

  const firm = await Firm.findByIdAndUpdate(req.params.id, { $addToSet: { lawyers: user._id } }, { new: true });

  if (!firm) {
      return res.status(404).json({ message: "Firm not found" });
  }

  res.status(200).json(codeFile);
};

const removeLawyer = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user && user.role === "lawyer") {
      return res.status(400).json({ message: "Lawyer not Found" });
  }

  const firm = await Firm.findByIdAndUpdate(req.params.id, { $pull: { lawyers: user._id } }, { new: true });

  if (!firm) {
      return res.status(404).json({ message: "Firm not found" });
  }

  res.status(200).json(codeFile);
};

// Update firm profile (add/remove lawyers, etc.)
const updateFirmProfile = async (req, res) => {
  try {
    const { firmId } = req.params;
    const firm = await Firm.findByIdAndUpdate(firmId, req.body, {new: true})
    if (!firm) {
      return res.status(404).json({ message: 'Firm not found' });
    } 
    res.status(200).json({ message: 'Firm profile updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while updating firm profile' });
  }
};

module.exports = {
  registerFirm,
  updateFirmProfile,
  addLawyer,
  removeLawyer
};
