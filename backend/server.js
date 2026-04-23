import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ FIXED CORS CONFIGURATION
const allowedOrigins = [
  'http://localhost:5173',           // Local development
  'http://localhost:3000',            // Alternative local port
  'http://187.127.155.134:5173',     // VPS IP for frontend
  'https://rightclickinstitute.in',   // Your domain
  'https://www.rightclickinstitute.in', // www domain
  'http://rightclickinstitute.in',    // HTTP version
  'http://www.rightclickinstitute.in' // HTTP www version
];

app.use(cors({
  origin: function(origin, callback) {
    // Allow requests with no origin (like mobile apps, curl, Postman)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      console.log('Blocked origin:', origin);
      callback(new Error('CORS not allowed from this origin'), false);
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept'],
  exposedHeaders: ['Content-Length', 'X-Requested-With']
}));

// ✅ Handle preflight requests explicitly
app.options('*', cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/rightclick')
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// User Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  class: { type: String, enum: ['9th', '10th', '11th', '12th'], required: true },
  stats: {
    downloads: { type: Number, default: 0 },
    chaptersCompleted: { type: Number, default: 0 },
    testsTaken: { type: Number, default: 0 },
    averageScore: { type: Number, default: 0 }
  },
  createdAt: { type: Date, default: Date.now }
});

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('User', userSchema);

// JWT Helper
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || 'your-secret-key', {
    expiresIn: '30d'
  });
};

// ✅ Test route to check CORS
app.get('/api/test', (req, res) => {
  res.json({ message: 'CORS is working!' });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running', timestamp: new Date().toISOString() });
});

// Register
app.post('/api/auth/register', async (req, res) => {
  try {
    console.log('📝 Registration request received:', req.body);
    const { name, email, password, studentClass } = req.body;
    
    if (!name || !email || !password || !studentClass) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }
    
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists with this email' });
    }
    
    const user = await User.create({
      name,
      email,
      password,
      class: studentClass
    });
    
    const token = generateToken(user._id);
    
    console.log('✅ User registered:', email);
    
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      class: user.class,
      stats: user.stats,
      token
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: error.message || 'Server error during registration' });
  }
});

// Login
app.post('/api/auth/login', async (req, res) => {
  try {
    console.log('🔑 Login request for:', req.body.email);
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide email and password' });
    }
    
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    
    const isPasswordMatch = await user.comparePassword(password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    
    const token = generateToken(user._id);
    
    console.log('✅ User logged in:', email);
    
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      class: user.class,
      stats: user.stats,
      token
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: error.message || 'Server error during login' });
  }
});

// Get profile
app.get('/api/auth/profile', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    const user = await User.findById(decoded.id).select('-password');
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.json(user);
  } catch (error) {
    console.error('Profile error:', error);
    res.status(401).json({ message: 'Invalid token' });
  }
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📍 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`📍 CORS allowed origins:`, allowedOrigins);
});