import mongoose from 'mongoose';

const MONGOURL = 'mongodb://localhost:27017/crud';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGOURL);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connectDB;
