const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDb = require('./config/dbConnection');
const authRoutes = require('./routes/authRoutes');
// const lawyerRoutes = require('./routes/lawyerRoutes');
// const firmRoutes = require('./routes/firmRoutes');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDb();

// Routes
app.use('/api/auth', authRoutes);         // Authentication routes
// app.use('/api/admin', adminRoutes);       // Admin routes
// app.use('/api/lawyers', lawyerRoutes);    // Lawyer management routes
// app.use('/api/firms', firmRoutes);        // Firm management routes

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
