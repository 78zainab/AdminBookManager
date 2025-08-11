// assigning the config function to a variable, haven't executed it yet...
// Load .env variables once
require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`### MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error('XXX MongoDB connection failed:', err.message);
    process.exit(1); 
  }
};

module.exports = connectDB;
