import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, X, Crown, Zap, Star, Shield, Download, BookOpen, FileText, CreditCard } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [processing, setProcessing] = useState(false);
  const { user, updateSubscription } = useAuth();

  const plans = [
    {
      name: 'Free',
      price: {
        monthly: 0,
        yearly: 0
      },
      features: [
        { name: 'Access to 3 free tests', included: true },
        { name: 'Browse all resources', included: true },
        { name: 'Preview PDFs', included: true },
        { name: 'Download practice notes', included: true },
        { name: 'Download test papers', included: false },
        { name: 'Access to solutions', included: false },
        { name: 'Previous year papers', included: false },
        { name: 'Priority support', included: false },
      ],
      buttonText: 'Current Plan',
      popular: false
    },
    {
      name: 'Monthly Access',
      price: {
        monthly: 299,
        yearly: 199
      },
      features: [
        { name: 'Unlimited downloads', included: true },
        { name: 'All practice notes', included: true },
        { name: 'All test papers', included: true },
        { name: 'Complete solutions', included: true },
        { name: 'Previous 10 years papers', included: true },
        { name: 'Chapter-wise PDFs', included: true },
        { name: 'Email support', included: true },
        { name: 'Doubt clearing', included: true },
      ],
      buttonText: 'Subscribe Monthly',
      popular: true,
      icon: Zap
    },
    {
      name: 'Yearly Access',
      price: {
        monthly: 1999,
        yearly: 1499
      },
      features: [
        { name: 'Unlimited downloads', included: true },
        { name: 'All practice notes', included: true },
        { name: 'All test papers', included: true },
        { name: 'Complete solutions', included: true },
        { name: 'Previous 15 years papers', included: true },
        { name: 'Chapter-wise PDFs', included: true },
        { name: 'Priority support', included: true },
        { name: 'Live doubt sessions', included: true },
      ],
      buttonText: 'Subscribe Yearly',
      popular: false,
      icon: Crown,
      saveAmount: 'Save 37%'
    }
  ];

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleSubscribe = async (plan) => {
    if (!user) {
      alert('Please login to subscribe');
      window.location.href = '/login';
      return;
    }

    if (plan.name === 'Free') {
      alert('You are already on Free plan');
      return;
    }

    setProcessing(true);

    try {
      // Load Razorpay script
      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) {
        alert('Failed to load payment gateway. Please try again.');
        setProcessing(false);
        return;
      }

      // Get price based on billing cycle
      const amount = plan.price[billingCycle] * 100; // Convert to paise

      // Razorpay options
      const options = {
        key: 'rzp_test_YOUR_KEY_HERE', // Replace with your Razorpay key
        amount: amount,
        currency: 'INR',
        name: 'Right Click Institute',
        description: `${plan.name} - ${billingCycle === 'monthly' ? 'Monthly' : 'Yearly'} Subscription`,
        image: '/logo.png',
        handler: function(response) {
          // Payment successful
          alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
          
          // Update subscription in context
          const endDate = new Date();
          if (plan.name === 'Monthly Access') {
            endDate.setMonth(endDate.getMonth() + 1);
          } else {
            endDate.setFullYear(endDate.getFullYear() + 1);
          }

          updateSubscription({
            isActive: true,
            plan: plan.name === 'Monthly Access' ? 'monthly' : 'yearly',
            startDate: new Date(),
            endDate: endDate,
            paymentId: response.razorpay_payment_id
          });

          // Redirect to success page
          window.location.href = '/payment-success';
        },
        prefill: {
          name: user.name,
          email: user.email,
          contact: user.phone || ''
        },
        notes: {
          address: 'Right Click Institute, Jalandhar'
        },
        theme: {
          color: '#3b82f6'
        },
        modal: {
          ondismiss: function() {
            setProcessing(false);
          }
        }
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment failed. Please try again.');
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-blue-600">Simple</span>{' '}
            <span className="text-red-600">Pricing</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Practice notes are <span className="text-green-600 font-bold">always free</span> • Pay only for test series
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-gray-100 p-1 rounded-full">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                billingCycle === 'monthly'
                  ? 'bg-gradient-to-r from-blue-600 to-red-600 text-white shadow-lg'
                  : 'text-gray-600'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                billingCycle === 'yearly'
                  ? 'bg-gradient-to-r from-blue-600 to-red-600 text-white shadow-lg'
                  : 'text-gray-600'
              }`}
            >
              Yearly
              <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full">
                Save 37%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden border ${
                plan.popular ? 'border-2 border-blue-500' : 'border-gray-200'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-red-600 text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
                  MOST POPULAR
                </div>
              )}

              {/* Save Badge */}
              {plan.saveAmount && (
                <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  {plan.saveAmount}
                </div>
              )}

              {/* Plan Icon */}
              {plan.icon && (
                <div className="pt-8 px-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-red-100 rounded-full flex items-center justify-center">
                    <plan.icon className={`w-8 h-8 ${
                      plan.name === 'Yearly Access' ? 'text-yellow-600' : 'text-blue-600'
                    }`} />
                  </div>
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                
                {/* Price */}
                <div className="mb-6">
                  <span className="text-5xl font-bold">
                    ₹{plan.price[billingCycle]}
                  </span>
                  <span className="text-gray-500 ml-2">
                    / {billingCycle === 'monthly' ? 'month' : 'year'}
                  </span>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Subscribe Button */}
                <button
                  onClick={() => handleSubscribe(plan)}
                  disabled={plan.name === 'Free' || processing}
                  className={`w-full py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center space-x-2 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-red-600 text-white hover:shadow-lg'
                      : plan.name === 'Yearly Access'
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg'
                      : plan.name === 'Free'
                      ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      : 'bg-gray-800 text-white hover:bg-gray-900'
                  }`}
                >
                  {processing ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      {plan.name !== 'Free' && <CreditCard className="w-4 h-4" />}
                      <span>{plan.name === 'Free' && user ? 'Current Plan' : plan.buttonText}</span>
                    </>
                  )}
                </button>

                {/* Payment Methods */}
                {plan.name !== 'Free' && (
                  <div className="mt-4 text-center">
                    <p className="text-xs text-gray-500">
                      Secure payment via Razorpay
                    </p>
                    <div className="flex justify-center space-x-2 mt-2">
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded">Visa</span>
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded">Mastercard</span>
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded">UPI</span>
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded">NetBanking</span>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features Comparison */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">What's Included</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4 flex items-center">
                <Download className="w-5 h-5 text-blue-600 mr-2" />
                Free Plan (Always Free)
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  All practice notes (unlimited downloads)
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  3 free test papers
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  Browse all resources
                </li>
                <li className="flex items-center text-gray-400">
                  <X className="w-4 h-4 text-red-400 mr-2" />
                  Additional test papers
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 flex items-center">
                <Crown className="w-5 h-5 text-yellow-600 mr-2" />
                Premium Plan
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  All practice notes (unlimited)
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  All test papers (unlimited)
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  Complete solutions
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  Previous 15 years papers
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;