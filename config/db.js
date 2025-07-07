const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://root:root@cluster0.n6haozq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log('MongoDB connected successfully✅');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
  }
};

module.exports = connectDB;
