import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, FileText, Download, Lock, ChevronRight, Award } from 'lucide-react';
import { useTests } from '../context/TestContext';
import { useAuth } from '../context/AuthContext';
import PaymentModal from '../components/PaymentModal';
import toast from 'react-hot-toast';

const ClassPage = () => {
  const { className, section } = useParams();
  const location = useLocation();
  const [chapters, setChapters] = useState([]);
  const [expandedChapter, setExpandedChapter] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  
  const { fetchChapters, downloadNote, loading } = useTests();
  const { hasActiveSubscription, freeTestsUsed } = useAuth();

  useEffect(() => {
    loadChapters();
  }, [className]);

  useEffect(() => {
    // Listen for subscription modal event
    const handleOpenModal = () => setShowPaymentModal(true);
    window.addEventListener('openSubscriptionModal', handleOpenModal);
    return () => window.removeEventListener('openSubscriptionModal', handleOpenModal);
  }, []);

  const loadChapters = async () => {
    const data = await fetchChapters(className);
    setChapters(data || []);
  };

  // Sample chapter data (replace with API data)
  const sampleChapters = [
    { number: 1, name: 'Number Systems' },
    { number: 2, name: 'Polynomials' },
    { number: 3, name: 'Coordinate Geometry' },
    { number: 4, name: 'Linear Equation in Two Variables' },
    { number: 5, name: 'Introduction to Euclids Geometry' },
    { number: 6, name: 'Lines and Angles' },
    { number: 7, name: 'Triangles' },
    { number: 8, name: 'Quadrilaterals' },
    { number: 9, name: 'Circle' },
    { number: 10, name: 'Heron\'s Formula' },
    { number: 11, name: 'Surface Areas and Volumes' },
    { number: 12, name: 'Statistics' }
  ];

  const handleDownloadNote = (chapter, noteUrl) => {
    downloadNote(noteUrl, `Chapter ${chapter.number} Notes`);
  };

  const handleDownloadTest = (chapter, testIndex) => {
    if (testIndex < 3 || hasActiveSubscription) {
      // Download test
      toast.success(`Downloading test for Chapter ${chapter.number}`);
    } else {
      setShowPaymentModal(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-blue-600">Class {className?.toUpperCase()}</span>{' '}
            <span className="text-red-600">{section === 'notes' ? 'Practice Notes' : 'Test Series'}</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {section === 'notes' 
              ? 'Free access to all chapter-wise practice notes' 
              : 'Access chapter-wise test papers with solutions'}
          </p>
          
          {section === 'tests' && !hasActiveSubscription && (
            <div className="mt-4 inline-flex items-center space-x-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full">
              <Lock className="w-4 h-4" />
              <span className="font-medium">
                {freeTestsUsed}/3 free tests used
              </span>
            </div>
          )}
        </div>

        {/* Chapters Grid */}
        <div className="max-w-4xl mx-auto">
          {sampleChapters.map((chapter, index) => (
            <motion.div
              key={chapter.number}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <div
                className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => setExpandedChapter(expandedChapter === chapter.number ? null : chapter.number)}
              >
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">
                        Chapter {chapter.number}: {chapter.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {section === 'notes' ? 'Free practice material' : 'Test paper with solutions'}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                    expandedChapter === chapter.number ? 'rotate-90' : ''
                  }`} />
                </div>

                {/* Expanded Content */}
                {expandedChapter === chapter.number && (
                  <div className="px-4 pb-4 pt-2 border-t bg-gray-50">
                    {section === 'notes' ? (
                      // Practice Notes Section
                      <div className="space-y-2">
                        <button
                          onClick={() => handleDownloadNote(chapter, `/pdfs/${className}/chapter-${chapter.number}-notes.pdf`)}
                          className="w-full flex items-center justify-between p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors group"
                        >
                          <div className="flex items-center space-x-3">
                            <FileText className="w-5 h-5 text-blue-600" />
                            <span className="font-medium">Chapter {chapter.number} Practice Notes</span>
                          </div>
                          <Download className="w-5 h-5 text-gray-400 group-hover:text-blue-600" />
                        </button>
                      </div>
                    ) : (
                      // Test Series Section
                      <div className="space-y-3">
                        {/* Test Paper */}
                        <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                          <div className="flex items-center space-x-3">
                            <FileText className="w-5 h-5 text-red-600" />
                            <div>
                              <p className="font-medium">Chapter {chapter.number} Test Paper</p>
                              <p className="text-sm text-gray-500">Board pattern • 40 marks</p>
                            </div>
                          </div>
                          
                          {index < 3 || hasActiveSubscription ? (
                            <button
                              onClick={() => handleDownloadTest(chapter, index)}
                              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800"
                            >
                              <Download className="w-4 h-4" />
                              <span className="text-sm">Download</span>
                            </button>
                          ) : (
                            <button
                              onClick={() => setShowPaymentModal(true)}
                              className="flex items-center space-x-2 text-gray-400 cursor-not-allowed"
                              disabled
                            >
                              <Lock className="w-4 h-4" />
                              <span className="text-sm">Locked</span>
                            </button>
                          )}
                        </div>

                        {/* Solution */}
                        {index < 3 || hasActiveSubscription ? (
                          <div className="flex items-center justify-between p-3 bg-white rounded-lg ml-8">
                            <div className="flex items-center space-x-3">
                              <Award className="w-5 h-5 text-green-600" />
                              <div>
                                <p className="font-medium">Solutions</p>
                                <p className="text-sm text-gray-500">Detailed explanations</p>
                              </div>
                            </div>
                            <button
                              onClick={() => handleDownloadTest(chapter, index)}
                              className="flex items-center space-x-2 text-green-600 hover:text-green-800"
                            >
                              <Download className="w-4 h-4" />
                              <span className="text-sm">Download</span>
                            </button>
                          </div>
                        ) : null}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Payment Modal */}
      <PaymentModal 
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
      />
    </div>
  );
};

export default ClassPage;