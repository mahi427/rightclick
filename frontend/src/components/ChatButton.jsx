import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Phone, Mail, Clock, ChevronRight } from 'lucide-react';

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '9888144156'; // Your WhatsApp number

  const chatOptions = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      description: 'Instant messaging',
      color: 'bg-green-500 hover:bg-green-600',
      action: () => {
        const message = encodeURIComponent("Hello! I'm interested in Right Click Institute's mathematics coaching. Can you provide more information?");
        window.open(`https://wa.me/91${phoneNumber}?text=${message}`, '_blank');
        setIsOpen(false);
      }
    },
    {
      icon: Phone,
      label: 'Call Now',
      description: 'Speak directly',
      color: 'bg-blue-500 hover:bg-blue-600',
      action: () => {
        window.location.href = `tel:${phoneNumber}`;
        setIsOpen(false);
      }
    },
    {
      icon: Mail,
      label: 'Email',
      description: 'Send detailed query',
      color: 'bg-red-500 hover:bg-red-600',
      action: () => {
        const subject = encodeURIComponent("Admission Inquiry - Right Click Institute");
        const body = encodeURIComponent("Hello,\n\nI am interested in your mathematics coaching programs. Please provide:\n1. Fee structure\n2. Batch timings\n3. Admission process\n4. Free demo class availability\n\nThank you!");
        window.location.href = `mailto:info@rightclickinstitute.com?subject=${subject}&body=${body}`;
        setIsOpen(false);
      }
    },
    {
      icon: Clock,
      label: 'Schedule Call',
      description: 'Set appointment',
      color: 'bg-purple-500 hover:bg-purple-600',
      action: () => {
        alert('Schedule call feature - We will call you back within 24 hours.');
        setIsOpen(false);
      }
    }
  ];

  const whatsappLink = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent("Hello! I'm interested in Right Click Institute's mathematics coaching. Can you provide more information?")}`;

  return (
    <>
      {/* Main Chat Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 200, 
          damping: 15,
          delay: 0.5 
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="relative">
          {/* Pulsing ring effect */}
          <motion.div
            className="absolute inset-0 bg-green-500 rounded-full"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          {/* Main button */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-2xl flex items-center justify-center cursor-pointer"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <X className="w-7 h-7 text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="chat"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <MessageCircle className="w-7 h-7 text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Notification badge */}
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-xs font-bold text-white">!</span>
          </div>
        </div>
      </motion.button>

      {/* Chat Options Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/30 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Options Panel */}
            <motion.div
              className="fixed bottom-24 right-6 z-50 w-80"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.8 }}
              transition={{ type: "spring", damping: 20 }}
            >
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                {/* Header */}
                <div className="bg-gradient-to-r from-green-600 to-blue-600 p-4 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-lg">Quick Connect</h3>
                      <p className="text-sm opacity-90">Get instant response</p>
                    </div>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Chat Options */}
                <div className="p-4 space-y-3">
                  {chatOptions.map((option, index) => (
                    <motion.button
                      key={option.label}
                      className={`w-full flex items-center p-3 rounded-xl text-white transition-all duration-300 ${option.color} shadow-md hover:shadow-lg`}
                      onClick={option.action}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                        <option.icon className="w-5 h-5" />
                      </div>
                      <div className="text-left flex-1">
                        <div className="font-bold">{option.label}</div>
                        <div className="text-sm opacity-90">{option.description}</div>
                      </div>
                    </motion.button>
                  ))}
                </div>

                {/* Quick Response */}
                <div className="p-4 bg-gray-50 border-t">
                  <div className="text-center mb-3">
                    <div className="text-sm font-semibold text-gray-700">Quick Responses Available</div>
                    <div className="text-xs text-gray-500">Typically replies within 5 minutes</div>
                  </div>
                  
                  {/* Quick Message Buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "Fee structure?",
                      "Demo class?"
                    ].map((msg, index) => (
                      <motion.button
                        key={msg}
                        className="text-xs bg-white border border-gray-300 rounded-lg py-2 px-3 hover:bg-gray-50 transition-colors"
                        onClick={() => {
                          const message = encodeURIComponent(`Hello! ${msg}`);
                          window.open(`https://wa.me/91${phoneNumber}?text=${message}`, '_blank');
                          setIsOpen(false);
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                      >
                        {msg}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Arrow pointer */}
              <div className="absolute -bottom-2 right-10 w-4 h-4 bg-white transform rotate-45"></div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Simple WhatsApp Button (Always visible) */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-2xl"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 200, 
          damping: 15,
          delay: 0.7 
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle className="w-5 h-5" />
        <span className="font-bold">Chat Now</span>
      </motion.a>
    </>
  );
};

export default ChatButton;