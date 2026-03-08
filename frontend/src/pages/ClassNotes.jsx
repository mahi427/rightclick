import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, ChevronRight, Download, FileText, 
  ArrowLeft, Search, AlertCircle, Loader
} from 'lucide-react';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';
import { getChaptersForClass } from '../data/chapters';
import { HEADER_HEIGHT } from '../components/AnimatedHeader'; // IMPORT from header

// REMOVE the duplicate declaration - this line is GONE now
// const HEADER_HEIGHT = 110; // DO NOT ADD THIS LINE

const ClassNotes = () => {
  const { className } = useParams();
  const { user, userClass } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedChapter, setExpandedChapter] = useState(null);
  const [pdfStatus, setPdfStatus] = useState({});
  const [loading, setLoading] = useState(true);
  const [pageLoading, setPageLoading] = useState(true);

  // Determine which class to show
  const displayClass = className || userClass || '9th';
  
  // Get chapters for this specific class
  const chapters = getChaptersForClass(displayClass);

  // Smooth page transition
  useEffect(() => {
    setPageLoading(true);
    
    // Scroll to top with offset for header
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
    
    const timer = setTimeout(() => setPageLoading(false), 500);
    return () => clearTimeout(timer);
  }, [displayClass]);

  // Check which PDFs exist
  useEffect(() => {
    const checkPDFs = async () => {
      setLoading(true);
      const status = {};
      
      for (const chapter of chapters) {
        const pdfUrl = `/pdfs/${displayClass}/${encodeURIComponent(chapter.fileName)}`;
        try {
          const response = await fetch(pdfUrl, { method: 'HEAD' });
          status[chapter.number] = response.ok;
        } catch {
          status[chapter.number] = false;
        }
        // Small delay to prevent overwhelming
        await new Promise(resolve => setTimeout(resolve, 50));
      }
      
      setPdfStatus(status);
      setLoading(false);
    };

    checkPDFs();
  }, [displayClass, chapters]);

  // Filter chapters based on search
  const filteredChapters = chapters.filter(chapter =>
    chapter.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    chapter.number.toString().includes(searchTerm)
  );

  const getPdfUrl = (chapter) => {
    return `/pdfs/${displayClass}/${encodeURIComponent(chapter.fileName)}`;
  };

  const handlePreview = (chapter) => {
    const pdfUrl = getPdfUrl(chapter);
    
    if (pdfStatus[chapter.number]) {
      window.open(pdfUrl, '_blank');
    } else {
      toast.error(`PDF not found for Chapter ${chapter.number}`);
    }
  };

  const handleDownload = (chapter) => {
    const pdfUrl = getPdfUrl(chapter);
    
    if (!pdfStatus[chapter.number]) {
      toast.error(`PDF not found for Chapter ${chapter.number}`);
      return;
    }
    
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = chapter.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success(`Downloading Chapter ${chapter.number}: ${chapter.name}`);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  if (pageLoading) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen flex items-center justify-center"
        style={{ paddingTop: HEADER_HEIGHT }}
      >
        <div className="text-center">
          <Loader className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading Class {displayClass} notes...</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
      style={{ paddingTop: HEADER_HEIGHT }}
    >
      <div className="container mx-auto px-4 py-8">
        {/* Header with animation */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link 
            to="/" 
            className="inline-flex items-center text-gray-600 hover:text-blue-600 mb-4 transition-colors group"
          >
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: -5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <ArrowLeft className="w-4 h-4 mr-2 inline" />
            </motion.span>
            Back to Home
          </Link>
          
          <div className="text-center mb-8">
            <motion.h1 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              <span className="text-blue-600">Class {displayClass?.toUpperCase()}</span>{' '}
              <span className="text-red-600">Practice Notes</span>
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Access all chapter-wise practice materials for free
            </motion.p>
          </div>

          {/* Search Bar with animation */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-md mx-auto mb-8"
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search chapters..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Chapters Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {filteredChapters.length === 0 ? (
            <motion.div 
              variants={itemVariants}
              className="text-center py-12"
            >
              <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No chapters found</h3>
              <p className="text-gray-500">Try searching with different keywords</p>
            </motion.div>
          ) : (
            filteredChapters.map((chapter, index) => (
              <motion.div
                key={chapter.number}
                variants={itemVariants}
                className="mb-4"
              >
                <motion.div
                  whileHover={{ scale: 1.01, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-all border border-gray-200"
                  onClick={() => setExpandedChapter(expandedChapter === chapter.number ? null : chapter.number)}
                >
                  <div className="p-4 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <motion.div 
                        whileHover={{ rotate: 10 }}
                        className="w-12 h-12 bg-gradient-to-br from-blue-100 to-red-100 rounded-lg flex items-center justify-center"
                      >
                        <BookOpen className="w-6 h-6 text-blue-600" />
                      </motion.div>
                      <div>
                        <h3 className="font-bold text-lg">
                          Chapter {chapter.number}: {chapter.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {loading ? (
                            <span className="text-gray-400">Checking PDF...</span>
                          ) : !pdfStatus[chapter.number] ? (
                            <span className="text-red-500 flex items-center">
                              <AlertCircle className="w-3 h-3 mr-1" />
                              PDF not found
                            </span>
                          ) : (
                            <span className="text-green-600 flex items-center">
                              ✓ PDF Available
                            </span>
                          )}
                        </p>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedChapter === chapter.number ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </motion.div>
                  </div>

                  {/* Expanded Content with animation */}
                  <AnimatePresence>
                    {expandedChapter === chapter.number && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-4 pb-4 pt-2 border-t bg-gray-50"
                      >
                        <div className="space-y-2">
                          <motion.button
                            whileHover={{ scale: 1.02, x: 5 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handlePreview(chapter)}
                            disabled={!pdfStatus[chapter.number]}
                            className={`w-full flex items-center justify-between p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors group ${
                              !pdfStatus[chapter.number] ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <FileText className="w-5 h-5 text-blue-600" />
                              <div className="text-left">
                                <span className="font-medium block">Preview Notes</span>
                                <span className="text-sm text-gray-500">Open in browser</span>
                              </div>
                            </div>
                            <span className="text-sm text-blue-600 group-hover:underline">View →</span>
                          </motion.button>

                          <motion.button
                            whileHover={{ scale: 1.02, x: 5 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handleDownload(chapter)}
                            disabled={!pdfStatus[chapter.number]}
                            className={`w-full flex items-center justify-between p-3 bg-white rounded-lg hover:bg-green-50 transition-colors group ${
                              !pdfStatus[chapter.number] ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <Download className="w-5 h-5 text-green-600" />
                              <div className="text-left">
                                <span className="font-medium block">Download Notes</span>
                                <span className="text-sm text-gray-500">Save as PDF</span>
                              </div>
                            </div>
                            <span className="text-sm text-green-600 group-hover:underline">Download →</span>
                          </motion.button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))
          )}
        </motion.div>

        {/* Loading overlay for PDF checking */}
        <AnimatePresence>
          {loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed bottom-8 right-8 bg-white rounded-lg shadow-lg p-4 flex items-center space-x-3"
              style={{ zIndex: 9999 }}
            >
              <Loader className="w-5 h-5 text-blue-600 animate-spin" />
              <span className="text-sm text-gray-600">Checking PDF availability...</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ClassNotes;