const Test = require('../models/Test');
const User = require('../models/User');
const Download = require('../models/Download');

// @desc    Get all tests for a class
// @route   GET /api/tests/:class
const getTestsByClass = async (req, res) => {
  try {
    const { class: className } = req.params;
    const tests = await Test.find({ class: className }).sort('-createdAt');
    
    // Add flag if user can download
    const user = await User.findById(req.user._id);
    const canDownload = user.subscription.isActive || user.freeTestsUsed < 3;
    
    const testsWithAccess = tests.map(test => ({
      ...test.toObject(),
      canDownload,
      isFree: test.isFree || user.freeTestsUsed < 3
    }));
    
    res.json(testsWithAccess);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Download test
// @route   GET /api/tests/:testId/download
const downloadTest = async (req, res) => {
  try {
    const test = await Test.findById(req.params.testId);
    if (!test) {
      return res.status(404).json({ message: 'Test not found' });
    }

    const user = await User.findById(req.user._id);
    
    // Check if user can download
    const canDownload = user.subscription.isActive || 
                       test.isFree || 
                       user.freeTestsUsed < 3;

    if (!canDownload) {
      return res.status(403).json({ 
        message: 'Free downloads exhausted. Please subscribe.',
        requiresSubscription: true 
      });
    }

    // Increment free tests used if applicable
    if (!user.subscription.isActive && !test.isFree) {
      user.freeTestsUsed += 1;
      await user.save();
    }

    // Track download
    await Download.create({
      user: user._id,
      test: test._id,
      pdfType: 'test-paper'
    });

    // Increment download count
    test.downloadCount += 1;
    await test.save();

    res.json({ 
      testPaperUrl: test.testPaper.pdfUrl,
      solutionUrl: test.solution.pdfUrl,
      testFileName: test.testPaper.fileName,
      solutionFileName: test.solution.fileName
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Admin: Add new test
const addTest = async (req, res) => {
  try {
    const test = await Test.create(req.body);
    res.status(201).json(test);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getTestsByClass, downloadTest, addTest };