import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const testConnection = async () => {
  try {
    console.log('🔍 Attempting to connect to MongoDB Atlas...');
    console.log('📍 Connection string:', process.env.MONGODB_URI?.replace(/:[^:]*@/, ':****@'));
    
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000
    });
    
    console.log('✅ Successfully connected to MongoDB Atlas!');
    
    // List all databases
    const admin = mongoose.connection.db.admin();
    const dbs = await admin.listDatabases();
    console.log('📊 Available databases:', dbs.databases.map(db => db.name));
    
    await mongoose.disconnect();
    console.log('👋 Disconnected from database');
    
  } catch (error) {
    console.error('❌ Connection failed:', error.message);
    console.error('\n🔧 Troubleshooting steps:');
    console.error('1. Check if your IP is whitelisted in MongoDB Atlas');
    console.error('2. Verify username and password are correct');
    console.error('3. Make sure the database name exists');
    console.error('4. Check if your network allows outbound connections to port 27017');
  }
};

testConnection();