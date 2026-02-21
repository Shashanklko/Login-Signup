const mongoose = require('mongoose');
require('dotenv').config();

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    if (!process.env.MONGO_URI) {
      throw new Error('Please define the MONGO_URI environment variable inside .env');
    }

    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(process.env.MONGO_URI, opts).then((mongoose) => {
      console.log('MongoDB Connected');
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
    console.log('Successfully connected to MongoDB');
  } catch (e) {
    console.error('CRITICAL: MongoDB connection failed!', e.message);
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

module.exports = connectDB;

