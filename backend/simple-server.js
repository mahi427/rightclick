import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';

const app = express();
const PORT = 5000;
const JWT_SECRET = 'your-secret-key-here';

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use(express.json());

// Store users in memory (temporary)
const users = [];

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running!' });
});

// Register
app.post('/api/auth/register', (req, res) => {
  const { name, email, password, studentClass } = req.body;
  
  // Check if user exists
  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }
  
  // Create new user
  const newUser = {
    id: users.length + 1,
    name,
    email,
    password, // In real app, hash this!
    class: studentClass,
    stats: { downloads: 0, chaptersCompleted: 0 }
  };
  
  users.push(newUser);
  
  // Generate token
  const token = jwt.sign({ id: newUser.id }, JWT_SECRET, { expiresIn: '30d' });
  
  res.status(201).json({
    _id: newUser.id,
    name: newUser.name,
    email: newUser.email,
    class: newUser.class,
    stats: newUser.stats,
    token
  });
});

// Login
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  
  const user = users.find(u => u.email === email && u.password === password);
  
  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
  
  const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '30d' });
  
  res.json({
    _id: user.id,
    name: user.name,
    email: user.email,
    class: user.class,
    stats: user.stats,
    token
  });
});

// Get profile
app.get('/api/auth/profile', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }
  
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = users.find(u => u.id === decoded.id);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      class: user.class,
      stats: user.stats
    });
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log(`📍 Test: http://localhost:${PORT}/api/health`);
});