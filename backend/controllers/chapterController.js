const Chapter = require('../models/Chapter');
const Download = require('../models/Download');

// @desc    Get all chapters for a class
// @route   GET /api/chapters/:class
const getChaptersByClass = async (req, res) => {
  try {
    const { class: className } = req.params;
    const chapters = await Chapter.find({ class: className }).sort('chapterNumber');
    res.json(chapters);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get single chapter details
// @route   GET /api/chapters/chapter/:id
const getChapterById = async (req, res) => {
  try {
    const chapter = await Chapter.findById(req.params.id);
    if (!chapter) {
      return res.status(404).json({ message: 'Chapter not found' });
    }
    res.json(chapter);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Download practice notes
// @route   GET /api/chapters/:chapterId/notes
const downloadPracticeNotes = async (req, res) => {
  try {
    const chapter = await Chapter.findById(req.params.chapterId);
    if (!chapter || !chapter.practiceNotes.pdfUrl) {
      return res.status(404).json({ message: 'Notes not found' });
    }

    // Track download
    await Download.create({
      user: req.user._id,
      chapter: chapter._id,
      pdfType: 'practice-notes'
    });

    res.json({ 
      downloadUrl: chapter.practiceNotes.pdfUrl,
      fileName: chapter.practiceNotes.fileName 
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Download test paper
// @route   GET /api/chapters/:chapterId/test/:testIndex
const downloadTestPaper = async (req, res) => {
  try {
    const chapter = await Chapter.findById(req.params.chapterId);
    if (!chapter) {
      return res.status(404).json({ message: 'Chapter not found' });
    }

    const testIndex = parseInt(req.params.testIndex);
    if (testIndex >= chapter.testPapers.length) {
      return res.status(404).json({ message: 'Test not found' });
    }

    const test = chapter.testPapers[testIndex];
    
    // Track download
    await Download.create({
      user: req.user._id,
      chapter: chapter._id,
      pdfType: 'test-paper'
    });

    res.json({ 
      downloadUrl: test.pdfUrl,
      fileName: test.fileName,
      title: test.title
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Admin: Add new chapter
const addChapter = async (req, res) => {
  try {
    const chapter = await Chapter.create(req.body);
    res.status(201).json(chapter);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getChaptersByClass,
  getChapterById,
  downloadPracticeNotes,
  downloadTestPaper,
  addChapter
};