import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, X } from 'lucide-react';
import { Helmet } from "react-helmet-async";

<Helmet>
  <link rel="canonical" href="https://rightclickinstitute.in/" />
</Helmet>
const PrivacyNotice = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="fixed bottom-4 right-4 max-w-sm bg-white rounded-lg shadow-2xl z-50 border border-gray-200"
    >
      <div className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center">
            <Shield className="w-5 h-5 text-green-600 mr-2" />
            <h3 className="font-bold text-gray-800">Privacy Friendly</h3>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <p className="text-sm text-gray-600">
          This website uses only essential animations and does not use cookies or tracking. 
          All content is served statically for your privacy.
        </p>
      </div>
    </motion.div>
  );
};

export default PrivacyNotice;