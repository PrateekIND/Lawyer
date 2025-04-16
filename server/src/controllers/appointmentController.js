const Appointment = require('../models/Appointment');
const Lawyer = require('../models/Lawyer');
const moment = require('moment');

// Helper function to generate slots
function generateSlots(startTime, endTime) {
    const slots = [];
    let currentTime = moment(startTime, 'h:mm A');
    const endMoment = moment(endTime, 'h:mm A');
  
    while (currentTime.isBefore(endMoment)) {
      const slot = currentTime.format('h:mm A');
      slots.push(slot);
      currentTime.add(1, 'hour');
    }
  
    return slots;
}

// Helper function to validate appointment data
function validateAppointmentData(data) {
    const { clientId, lawyerId, appointmentDate, location } = data;
    
    if (!clientId || !lawyerId || !appointmentDate || !location) {
        return {
            isValid: false,
            message: 'Missing required fields: clientId, lawyerId, appointmentDate, and location are required'
        };
    }

    if (!moment(appointmentDate).isValid()) {
        return {
            isValid: false,
            message: 'Invalid appointment date format'
        };
    }

    return { isValid: true };
}

// Get all available slots for booking
exports.getAvailableSlots = async (req, res) => {
    try {
        const { lawyerId, date } = req.query;
  
        if (!lawyerId || !date) {
            return res.status(400).json({ message: 'lawyerId and date are required' });
        }
  
        // Fetch lawyer's available hours
        const lawyer = await Lawyer.findById(lawyerId);
        if (!lawyer) {
            return res.status(404).json({ message: 'Lawyer not found' });
        }
  
        const [startTime, endTime] = lawyer.availableHours.split(' - ');
  
        // Generate slots in local time
        const slots = generateSlots(startTime, endTime);
  
        // Parse the date input and adjust it to start of day in local time
        const appointmentDate = moment(date).startOf('day');
        const appointmentDateStart = appointmentDate.clone();
        const appointmentDateEnd = appointmentDate.clone().endOf('day');
  
        // Fetch booked appointments for the lawyer on the given date
        const bookedAppointments = await Appointment.find({
            lawyerId,
            appointmentDate: {
                $gte: appointmentDateStart.toDate(),
                $lte: appointmentDateEnd.toDate(),
            },
            status: { $ne: 'cancelled' }
        });
  
        // Convert booked appointment times to local time format
        const bookedTimes = bookedAppointments.map((appointment) =>
            moment(appointment.appointmentDate).format('h:mm A')
        );

        // Remove booked slots from the available slots
        const availableSlots = slots.filter((slot) => !bookedTimes.includes(slot));
  
        res.status(200).json({ availableSlots });
    } catch (error) {
        console.error('Error fetching available slots:', error.message);
        res.status(500).json({ message: 'Error fetching available slots', error: error.message });
    }
};

// Book an appointment
exports.bookAppointment = async (req, res) => {
    try {
        // Validate request body
        const validation = validateAppointmentData(req.body);
        if (!validation.isValid) {
            return res.status(400).json({ message: validation.message });
        }

        const { clientId, lawyerId, appointmentDate, location } = req.body;

        // Check if lawyer exists
        const lawyer = await Lawyer.findById(lawyerId);
        if (!lawyer) {
            return res.status(404).json({ message: 'Lawyer not found' });
        }

        // Parse the appointment date and time
        const requestedDateTime = moment(appointmentDate);
        const requestedTime = requestedDateTime.format('h:mm A');

        // Get available slots for the requested date
        const [startTime, endTime] = lawyer.availableHours.split(' - ');
        const availableSlots = generateSlots(startTime, endTime);

        // Check if requested time is within available slots
        if (!availableSlots.includes(requestedTime)) {
            return res.status(400).json({ 
                message: 'Invalid appointment time. Please select a time within lawyer\'s available hours.',
                availableSlots
            });
        }

        // Create appointment date by combining the date and time properly
        const finalAppointmentDate = moment(appointmentDate).format('YYYY-MM-DD') + ' ' + requestedTime;
        const finalDateTime = moment(finalAppointmentDate, 'YYYY-MM-DD h:mm A');

        // Check if the slot is already booked
        const existingAppointment = await Appointment.findOne({
            lawyerId,
            appointmentDate: finalDateTime.toDate(),
            status: { $ne: 'cancelled' }
        });

        if (existingAppointment) {
            return res.status(409).json({ message: 'This slot is already booked' });
        }

        // Create and save the new appointment
        const newAppointment = new Appointment({
            clientId,
            lawyerId,
            appointmentDate: finalDateTime.toDate(),
            location,
            status: 'pending'
        });

        const savedAppointment = await newAppointment.save();
        
        // Populate client and lawyer details in response
        const populatedAppointment = await Appointment.findById(savedAppointment._id)
            .populate('clientId', 'name email')
            .populate('lawyerId', 'name email');

        res.status(201).json(populatedAppointment);
    } catch (error) {
        console.error('Error booking appointment:', error.message);
        res.status(500).json({ message: 'Error booking appointment', error: error.message });
    }
};

// Update appointment status
exports.updateAppointmentStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        if (!['confirmed', 'cancelled', 'pending'].includes(status)) {
            return res.status(400).json({ message: 'Invalid status. Must be confirmed, cancelled, or pending' });
        }

        const updatedAppointment = await Appointment.findByIdAndUpdate(
            id,
            { 
                status,
                updatedAt: new Date()
            },
            { new: true }
        ).populate('clientId lawyerId');

        if (!updatedAppointment) {
            return res.status(404).json({ message: 'Appointment not found' });
        }

        res.status(200).json(updatedAppointment);
    } catch (error) {
        console.error('Error updating appointment:', error.message);
        res.status(500).json({ message: 'Error updating appointment', error: error.message });
    }
};