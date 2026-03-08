import mongoose from 'mongoose';

const chapterSchema = new mongoose.Schema({
  class: {
    type: String,
    enum: ['9th', '10th', '11th', '12th'],
    required: true,
    index: true
  },
  chapterNumber: {
    type: Number,
    required: true
  },
  chapterName: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    default: ''
  },
  pdfUrl: {
    type: String,
    required: true
  },
  pdfSize: {
    type: String,
    default: '~2 MB'
  },
  pageCount: {
    type: Number,
    default: 15
  },
  downloads: {
    type: Number,
    default: 0
  },
  isActive: {
    type: Boolean,
    default: true
  },
  order: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Compound index for faster queries
chapterSchema.index({ class: 1, chapterNumber: 1 }, { unique: true });

// Update timestamp on save
chapterSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

export default mongoose.model('Chapter', chapterSchema);