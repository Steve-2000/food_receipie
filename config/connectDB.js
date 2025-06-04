const mongoose = require('mongoose');

const connectdb = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/reciepeDB");
    console.log('✅ MongoDB connected');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
    process.exit(1); // optional: stop server if DB fails
  }
};

module.exports = connectdb;
