import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  BookOpen, Download, Award, TrendingUp, 
  Clock, ArrowRight, FileText, Star, Target, User
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

const Dashboard = () => {
  const { user, userName, userClass, logout } = useAuth();
  const [stats, setStats] = useState({
    downloads: 0,
    chaptersCompleted: 0,
    testsTaken: 0,
    averageScore: 0
  });

  useEffect(() => {
    // Load user stats from localStorage
    const savedStats = localStorage.getItem(`stats_${user?._id}`);
    if (savedStats) {
      setStats(JSON.parse(savedStats));
    }
  }, [user]);

  const chapters = [
    { number: 1, name: 'Number Systems' },
    { number: 2, name: 'Polynomials' },
    { number: 3, name: 'Coordinate Geometry' },
    { number: 4, name: 'Linear Equations' },
    { number: 5, name: 'Euclids Geometry' },
    { number: 6, name: 'Lines and Angles' },
    { number: 7, name: 'Triangles' },
    { number: 8, name: 'Quadrilaterals' },
    { number: 9, name: 'Circle' },
    { number: 10, name: "Heron's Formula" },
    { number: 11, name: 'Surface Areas' },
    { number: 12, name: 'Statistics' }
  ];

  const memberSince = user?.createdAt 
    ? new Date(user.createdAt).toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    : 'March 2026';

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-32 pb-12">
      <div className="container mx-auto px-4">
        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-red-600 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">
                  Welcome back,{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">
                    {userName}
                  </span>
                </h1>
                <p className="text-gray-600">
                  Class {userClass || 'Not specified'} • Member since {memberSince}
                </p>
              </div>
            </div>
            <button
              onClick={logout}
              className="px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
            >
              Logout
            </button>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {[
            { icon: Download, label: 'Downloads', value: stats.downloads, color: 'blue' },
            { icon: BookOpen, label: 'Chapters', value: `${stats.chaptersCompleted}/12`, color: 'green' },
            { icon: Target, label: 'Tests Taken', value: stats.testsTaken, color: 'purple' },
            { icon: Star, label: 'Avg. Score', value: `${stats.averageScore}%`, color: 'yellow' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"
            >
              <div className={`w-12 h-12 bg-${stat.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
              </div>
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Progress */}
          <div className="lg:col-span-2 space-y-6">
            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-gray-600" />
                Recent Activity
              </h3>

              <div className="text-center py-8">
                <Download className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-500">No downloads yet</p>
                <Link
                  to={`/class/${userClass?.toLowerCase() || '9th'}/notes`}
                  className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-700"
                >
                  Start downloading notes
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Continue Learning */}
            <div className="bg-gradient-to-br from-blue-600 to-red-600 rounded-xl p-6 shadow-lg text-white">
              <h3 className="text-xl font-bold mb-4">Continue Learning</h3>
              <p className="mb-4 opacity-90">
                Next chapter: {chapters[stats.chaptersCompleted]?.name || 'Number Systems'}
              </p>
              <Link
                to={`/class/${userClass?.toLowerCase() || '9th'}/notes`}
                className="block w-full bg-white text-blue-600 py-3 rounded-lg font-bold text-center hover:bg-gray-100 transition-colors"
              >
                Continue to Chapter {stats.chaptersCompleted + 1}
              </Link>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link
                  to={`/class/${userClass?.toLowerCase() || '9th'}/notes`}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <span className="font-medium">📚 Browse Notes</span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </Link>
                <Link
                  to="/testimonials"
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <span className="font-medium">⭐ View Testimonials</span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </Link>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText('rightclickinstitute.com');
                    toast.success('Link copied to clipboard!');
                  }}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors w-full"
                >
                  <span className="font-medium">🔗 Share Website</span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;