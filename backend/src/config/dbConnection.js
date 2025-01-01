const mongoose = require("mongoose");

// Making connection to the database with connection pooling
const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            maxPoolSize: 10, // Set the connection pool size (adjust as per your app's needs)
        });

        console.log(
            "Database connected",
            connect.connection.host,
            connect.connection.name
        );
    } catch (err) {
        console.error("Database connection error:", err);
        process.exit(1); // Exit the process with failure
    }
};

module.exports = connectDb;
