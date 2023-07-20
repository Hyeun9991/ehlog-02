import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Database is connected...');
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1); // 프로세스 종료, 1: 비정상적인 종료(오류 발생, 예상치 못한 상황에 의해 발생)
  }
};

export default connectDB;
