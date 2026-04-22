import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import { getUserProfile, loginUser, logoutUser, registerUser } from '../services/api';
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
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        localStorage.setItem('userId', firebaseUser.uid);
        const profile = await getUserProfile(firebaseUser.uid);
        if (profile.success) {
          setUserProfile(profile.data);
        }
      } else {
        setUser(null);
        setUserProfile(null);
        localStorage.removeItem('userId');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const register = async (userData) => {
    const result = await registerUser(
      userData.email,
      userData.password,
      userData.name,
      userData.studentClass
    );
    
    if (result.success) {
      toast.success(`Welcome, ${userData.name}!`);
      return result.user;
    }
    toast.error(result.error);
    throw new Error(result.error);
  };

  const login = async (email, password) => {
    const result = await loginUser(email, password);
    if (result.success) {
      toast.success(`Welcome back, ${result.user.name || 'Student'}!`);
      return result.user;
    }
    toast.error(result.error);
    throw new Error(result.error);
  };

  const logout = async () => {
    await logoutUser();
    toast.success('Logged out successfully');
  };

  const value = {
    user,
    userProfile,
    loading,
    register,
    login,
    logout,
    isAuthenticated: !!user,
    userName: user?.displayName || userProfile?.name || 'Student',
    userClass: userProfile?.class || null
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};