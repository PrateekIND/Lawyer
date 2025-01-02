const Lawyer = require('../models/Lawyer');
const User = require('../models/User');

// Register a new lawyer
const registerLawyer = async (req, res) => {
  try {
    const { phone, role, specialization, availableHours } = req.body;
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(401).json({ message: "User not authenticated" });
    }

    const existingLawyer = await Lawyer.findOne({ user: req.user.id });
    if (existingLawyer) {
      return res.status(400).json({ message: "Lawyer profile already exists" });
    }

    const newLawyer = new Lawyer({ user: req.user.id, phone, role, specialization, availableHours, isApproved: false });
    await newLawyer.save();

    res.status(201).json({ message: "Lawyer registered successfully. Awaiting admin approval." });
  } catch (error) {
    console.error("Error registering lawyer:", error);
    res.status(500).json({ message: "An error occurred while registering the lawyer" });
  }
};

// Update lawyer profile
const updateLawyerProfile = async (req, res) => {
  try {
    const lawyerId= req.params.id;
    let lawyer = await Lawyer.findById(lawyerId);
    if(req.user.id !== lawyer.user.toString()){
      return res.status(401).json({message: "You are not Authorized to update this profile"});
    }
    lawyer = await Lawyer.findByIdAndUpdate(lawyerId, req.body, {new: true});
    res.status(202).json(lawyer);
  } catch (error) {
    console.error("Error updating lawyer profile:", error);
     res.status(500).json({message: "An error occurred while updating the lawyer profile"});
  }
}
module.exports = {
  registerLawyer,
  updateLawyerProfile,
};
