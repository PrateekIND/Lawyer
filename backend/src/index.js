const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDb = require('./config/dbConnection');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes')
const lawyerRoutes = require('./routes/lawyerRoutes');
const firmRoutes = require('./routes/firmRoutes');
const authMiddleware = require('./middleware/authMiddleware');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDb();

// Routes
app.use('/api/auth', authRoutes);         // Authentication routes
app.use('/api', userRoutes)
// app.use('/api/admin', adminRoutes);       // Admin routes
app.use('/api/lawyer',authMiddleware, lawyerRoutes);    // Lawyer management routes
app.use('/api/firm',authMiddleware, firmRoutes);        // Firm management routes

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
