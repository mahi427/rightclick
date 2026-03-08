import express from 'express';
import Chapter from '../models/Chapter.js';
import User from '../models/User.js';
import { protect, checkSubscription } from '../middleware/authMiddleware.js';

const router = express.Router();

// @desc    Get all tests for a chapter (with access control)
// @route   GET /api/tests/chapter/:chapterId
router.get('/chapter/:chapterId', protect, checkSubscription, async (req, res) => {
  try {
    const chapter = await Chapter.findById(req.params.chapterId);
    const tests = chapter.testPapers.map(test => {
      const testObj = test.toObject();
      
      // Check if test is free (first 3 tests are free)
      const isFree = test.isFree || req.freeTestsUsed < 3;
      
      if (isFree || req.hasSubscription) {
        // Full access
        return testObj;
      } else {
        // Limited access (show only metadata, no download URL)
        return {
          ...testObj,
          pdfUrl: null,
          solutionPdfUrl: null,
          locked: true
        };
      }
    });

    res.json({
      tests,
      freeTestsUsed: req.freeTestsUsed,
      hasSubscription: req.hasSubscription
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Download test paper
// @route   GET /api/tests/download/:testId
router.get('/download/:testId', protect, checkSubscription, async (req, res) => {
  try {
    const chapter = await Chapter.findOne({ 'testPapers._id': req.params.testId });
    const test = chapter.testPapers.id(req.params.testId);
    
    // Check access
    const isFree = test.isFree || req.freeTestsUsed < 3;
    
    if (!isFree && !req.hasSubscription) {
      return res.status(403).json({ 
        message: 'Please subscribe to access more tests',
        freeTestsUsed: req.freeTestsUsed
      });
    }

    // If it's a free test, increment the count
    if (!test.isFree && !req.hasSubscription) {
      await User.findByIdAndUpdate(req.user._id, {
        $inc: { freeTestsUsed: 1 }
      });
    }

    res.json({ 
      pdfUrl: test.pdfUrl,
      solutionUrl: test.solutionPdfUrl,
      title: test.title
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Submit test answers (for future feature)
// @route   POST /api/tests/submit
router.post('/submit', protect, async (req, res) => {
  try {
    const { testId, answers, score } = req.body;
    
    await User.findByIdAndUpdate(req.user._id, {
      $push: {
        testsCompleted: {
          testId,
          score,
          answers,
          completedAt: new Date()
        }
      }
    });

    res.json({ message: 'Test submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;