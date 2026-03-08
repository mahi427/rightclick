const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
  class: {
    type: String,
    required: true,
    enum: ['9th', '10th', '11th', '12th']
  },
  chapterNumber: Number,
  chapterName: String,
  testNumber: Number,
  title: String,
  description: String,
  testPaper: {
    pdfUrl: String,
    fileName: String
  },
  solution: {
    pdfUrl: String,
    fileName: String
  },
  duration: Number, // in minutes
  totalMarks: Number,
  isFree: {
    type: Boolean,
    default: false
  },
  downloadCount: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Test', testSchema);