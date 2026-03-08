import express from 'express';
import User from '../models/User.js';
import Chapter from '../models/Chapter.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// @desc    Get user dashboard data
// @route   GET /api/users/dashboard
router.get('/dashboard', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user._id)
      .select('-password');
    
    // Get total chapters for user's class
    const totalChapters = await Chapter.countDocuments({ 
      class: user.class,
      isActive: true 
    });
    
    // Get recent activity
    const recentActivity = [];
    
    // Add recent downloads
    user.recentDownloads.forEach(d => {
      recentActivity.push({
        type: 'download',
        item: d.chapter,
        time: d.downloadedAt,
        className: d.className
      });
    });
    
    // Add completed chapters
    user.completedChapters.forEach(c => {
      recentActivity.push({
        type: 'complete',
        item: c.chapterName,
        time: c.completedAt
      });
    });
    
    // Sort by date (most recent first)
    recentActivity.sort((a, b) => new Date(b.time) - new Date(a.time));
    
    res.json({
      user: {
        name: user.name,
        email: user.email,
        class: user.class,
        memberSince: user.createdAt
      },
      stats: {
        ...user.stats,
        totalChapters,
        progress: Math.round((user.stats.chaptersCompleted / totalChapters) * 100) || 0
      },
      recentActivity: recentActivity.slice(0, 10),
      completedChapters: user.completedChapters,
      recentDownloads: user.recentDownloads
    });
  } catch (error) {
    console.error('Dashboard error:', error);
    res.status(500).json({ 
      message: error.message || 'Error fetching dashboard data' 
    });
  }
});

// @desc    Update user stats (for tracking)
// @route   POST /api/users/stats
router.post('/stats', protect, async (req, res) => {
  try {
    const { downloads, chaptersCompleted, testsTaken, averageScore } = req.body;
    
    const user = await User.findById(req.user._id);
    
    if (downloads !== undefined) user.stats.downloads = downloads;
    if (chaptersCompleted !== undefined) user.stats.chaptersCompleted = chaptersCompleted;
    if (testsTaken !== undefined) user.stats.testsTaken = testsTaken;
    if (averageScore !== undefined) user.stats.averageScore = averageScore;
    
    user.lastActive = new Date();
    await user.save();
    
    res.json({ 
      message: 'Stats updated successfully',
      stats: user.stats
    });
  } catch (error) {
    console.error('Stats update error:', error);
    res.status(500).json({ 
      message: error.message || 'Error updating stats' 
    });
  }
});

export default router;