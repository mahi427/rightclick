import express from 'express';
import Chapter from '../models/Chapter.js';
import User from '../models/User.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// @desc    Get all chapters for a class
// @route   GET /api/chapters/:class
router.get('/:class', async (req, res) => {
  try {
    const chapters = await Chapter.find({ 
      class: req.params.class,
      isActive: true 
    }).sort('order');
    
    res.json(chapters);
  } catch (error) {
    console.error('Error fetching chapters:', error);
    res.status(500).json({ 
      message: error.message || 'Error fetching chapters' 
    });
  }
});

// @desc    Get single chapter
// @route   GET /api/chapters/:class/:chapterNumber
router.get('/:class/:chapterNumber', async (req, res) => {
  try {
    const chapter = await Chapter.findOne({ 
      class: req.params.class,
      chapterNumber: parseInt(req.params.chapterNumber),
      isActive: true 
    });
    
    if (!chapter) {
      return res.status(404).json({ message: 'Chapter not found' });
    }
    
    res.json(chapter);
  } catch (error) {
    console.error('Error fetching chapter:', error);
    res.status(500).json({ 
      message: error.message || 'Error fetching chapter' 
    });
  }
});

// @desc    Download chapter (track download)
// @route   POST /api/chapters/download/:chapterId
router.post('/download/:chapterId', protect, async (req, res) => {
  try {
    const chapter = await Chapter.findById(req.params.chapterId);
    
    if (!chapter) {
      return res.status(404).json({ message: 'Chapter not found' });
    }
    
    // Increment download count
    chapter.downloads += 1;
    await chapter.save();
    
    // Track in user's recent downloads
    const user = await User.findById(req.user._id);
    
    user.recentDownloads.unshift({
      chapter: chapter.chapterName,
      chapterNumber: chapter.chapterNumber,
      className: chapter.class,
      downloadedAt: new Date()
    });
    
    // Keep only last 10 downloads
    if (user.recentDownloads.length > 10) {
      user.recentDownloads = user.recentDownloads.slice(0, 10);
    }
    
    // Update stats
    user.stats.downloads += 1;
    user.lastActive = new Date();
    
    await user.save();
    
    res.json({ 
      message: 'Download tracked successfully',
      pdfUrl: chapter.pdfUrl
    });
  } catch (error) {
    console.error('Error tracking download:', error);
    res.status(500).json({ 
      message: error.message || 'Error tracking download' 
    });
  }
});

// @desc    Mark chapter as completed
// @route   POST /api/chapters/complete/:chapterId
router.post('/complete/:chapterId', protect, async (req, res) => {
  try {
    const chapter = await Chapter.findById(req.params.chapterId);
    
    if (!chapter) {
      return res.status(404).json({ message: 'Chapter not found' });
    }
    
    const user = await User.findById(req.user._id);
    
    // Check if already completed
    const alreadyCompleted = user.completedChapters.some(
      c => c.chapterNumber === chapter.chapterNumber
    );
    
    if (!alreadyCompleted) {
      user.completedChapters.push({
        chapterNumber: chapter.chapterNumber,
        chapterName: chapter.chapterName,
        completedAt: new Date()
      });
      
      user.stats.chaptersCompleted = user.completedChapters.length;
      user.lastActive = new Date();
      
      await user.save();
    }
    
    res.json({ 
      message: 'Chapter marked as completed',
      completedChapters: user.completedChapters
    });
  } catch (error) {
    console.error('Error marking chapter complete:', error);
    res.status(500).json({ 
      message: error.message || 'Error marking chapter complete' 
    });
  }
});

export default router;