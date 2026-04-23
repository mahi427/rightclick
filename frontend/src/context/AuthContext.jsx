import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api';
import toast from 'react-hot-toast';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      loadUser();
    } else {
      setLoading(false);
    }
  }, []);

  const loadUser = async () => {
    try {
      const response = await api.get('/auth/profile');
      setUser(response.data);
      localStorage.setItem('user', JSON.stringify(response.data));
    } catch (error) {
      console.error('Failed to load user:', error);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    } finally {
      setLoading(false);
    }
  };

  const register = async (userData) => {
    try {
      console.log('Registering with backend:', userData);
      const response = await api.post('/auth/register', userData);
      console.log('Registration response:', response.data);
      
      const { token, ...userData_ } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(userData_));
      setUser(userData_);
      
      toast.success(`Welcome, ${userData_.name}!`);
      return userData_;
    } catch (error) {
      console.error('Registration error:', error.response?.data || error.message);
      const message = error.response?.data?.message || 'Registration failed. Please try again.';
      toast.error(message);
      throw error;
    }
  };

  const login = async (email, password) => {
    try {
      console.log('Logging in with:', email);
      const response = await api.post('/auth/login', { email, password });
      console.log('Login response:', response.data);
      
      const { token, ...userData } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);
      
      toast.success(`Welcome back, ${userData.name}!`);
      return userData;
    } catch (error) {
      console.error('Login error:', error.response?.data || error.message);
      const message = error.response?.data?.message || 'Login failed. Please check your credentials.';
      toast.error(message);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    toast.success('Logged out successfully');
  };

  const value = {
    user,
    loading,
    register,
    login,
    logout,
    isAuthenticated: !!user,
    userName: user?.name || 'Student',
    userClass: user?.class || null,
    userEmail: user?.email || null
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};