import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const dbURI = 'mongodb+srv://angelrap1111:dQRUrdzzdRZR21NR@eda2.tkilr.mongodb.net/?retryWrites=true&w=majority&appName=EDA2';

const connectDB = async () => {
    try {
        await mongoose.connect(dbURI, {
        });
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('Error connecting to MongoDB', err);
        process.exit(1);
    }
};

export default connectDB;
