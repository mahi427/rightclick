import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Download, ArrowLeft, Crown } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const PaymentSuccess = () => {
  const { updateSubscription } = useAuth();

  useEffect(() => {
    // Update subscription status in context
    updateSubscription({
      isActive: true,
      plan: 'monthly',
      startDate: new Date(),
      endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-12 text-center border border-green-200">
            {/* Success Animation */}
            <div className="relative mb-8">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto animate-pulse">
                <CheckCircle className="w-12 h-12 text-green-500" />
              </div>
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                <Crown className="w-6 h-6 text-white" />
              </div>
            </div>

            <h1 className="text-3xl font-bold mb-4 text-green-600">
              Payment Successful! 🎉
            </h1>
            
            <p className="text-gray-600 mb-8 text-lg">
              Thank you for subscribing! You now have premium access to all resources.
            </p>

            {/* Subscription Details */}
            <div className="bg-gradient-to-r from-blue-50 to-red-50 rounded-xl p-6 mb-8">
              <h3 className="font-bold text-lg mb-3">Your Premium Benefits:</h3>
              <ul className="text-left space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Unlimited downloads of all PDFs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Access to all chapter-wise practice notes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Complete test series with solutions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Previous 15 years papers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Priority email support</span>
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/dashboard"
                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-red-600 text-white px-6 py-3 rounded-lg font-bold hover:shadow-lg transition-shadow"
              >
                <Download className="w-4 h-4" />
                <span>Go to Dashboard</span>
              </Link>
              
              <Link
                to="/class/9th"
                className="inline-flex items-center justify-center space-x-2 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
              >
                <span>Start Learning</span>
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            </div>

            {/* Email Confirmation */}
            <div className="mt-8 text-sm text-gray-500">
              <p>A confirmation email has been sent to your registered email address.</p>
              <p className="mt-2">For any queries, contact us at support@rightclickinstitute.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;