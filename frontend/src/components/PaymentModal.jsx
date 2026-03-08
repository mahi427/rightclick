import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Zap, Crown, Star } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { paymentService } from '../services/paymentService';
import toast from 'react-hot-toast';

const PaymentModal = ({ isOpen, onClose }) => {
  const [selectedPlan, setSelectedPlan] = useState('monthly');
  const [loading, setLoading] = useState(false);
  const { user, updateSubscription } = useAuth();

  const plans = [
    {
      id: 'monthly',
      name: 'Monthly Access',
      price: 299,
      features: [
        'Unlimited test downloads',
        'All solutions included',
        'Previous 10 years papers',
        'Email support'
      ],
      icon: Zap,
      popular: true
    },
    {
      id: 'yearly',
      name: 'Yearly Access',
      price: 1499,
      features: [
        'Everything in Monthly',
        'Save 37%',
        'Previous 15 years papers',
        'Priority support',
        'Doubt solving sessions'
      ],
      icon: Crown,
      popular: false
    },
    {
      id: 'lifetime',
      name: 'Lifetime Access',
      price: 2999,
      features: [
        'Everything in Yearly',
        'Lifetime updates',
        'All future content',
        '1-on-1 mentoring',
        'Career guidance'
      ],
      icon: Star,
      popular: false
    }
  ];

  const handlePayment = async () => {
    try {
      setLoading(true);
      
      // Create order
      const order = await paymentService.createOrder(selectedPlan);
      
      // Initialize Razorpay
      const options = {
        key: order.keyId,
        amount: order.amount,
        currency: order.currency,
        name: 'Right Click Institute',
        description: `${selectedPlan} Test Series Subscription`,
        order_id: order.orderId,
        handler: async (response) => {
          try {
            // Verify payment
            const result = await paymentService.verifyPayment({
              ...response,
              planType: selectedPlan
            });
            
            if (result.success) {
              updateSubscription(result.subscription);
              toast.success('Payment successful! You now have full access.');
              onClose();
            }
          } catch (error) {
            toast.error('Payment verification failed');
          }
        },
        prefill: {
          name: user?.name,
          email: user?.email,
          contact: ''
        },
        theme: {
          color: '#3b82f6'
        }
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      toast.error('Failed to initiate payment');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="sticky top-0 bg-white p-6 border-b flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800">Choose Your Plan</h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Plans Grid */}
              <div className="p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  {plans.map((plan) => (
                    <motion.div
                      key={plan.id}
                      className={`relative rounded-xl p-6 border-2 transition-all duration-300 cursor-pointer ${
                        selectedPlan === plan.id
                          ? 'border-blue-600 shadow-lg'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                      onClick={() => setSelectedPlan(plan.id)}
                      whileHover={{ y: -5 }}
                    >
                      {plan.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                          MOST POPULAR
                        </div>
                      )}

                      <div className="text-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <plan.icon className={`w-6 h-6 ${
                            plan.id === 'monthly' ? 'text-blue-600' :
                            plan.id === 'yearly' ? 'text-purple-600' : 'text-yellow-600'
                          }`} />
                        </div>
                        <h3 className="text-xl font-bold">{plan.name}</h3>
                        <div className="mt-2">
                          <span className="text-3xl font-bold">₹{plan.price}</span>
                          {plan.id !== 'lifetime' && (
                            <span className="text-gray-500 text-sm">/{plan.id === 'monthly' ? 'mo' : 'yr'}</span>
                          )}
                        </div>
                      </div>

                      <ul className="space-y-3 mb-6">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-start text-sm">
                            <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <button
                        onClick={() => setSelectedPlan(plan.id)}
                        className={`w-full py-3 rounded-lg font-semibold transition-all ${
                          selectedPlan === plan.id
                            ? 'bg-gradient-to-r from-blue-600 to-red-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {selectedPlan === plan.id ? 'Selected' : 'Select'}
                      </button>
                    </motion.div>
                  ))}
                </div>

                {/* Payment Button */}
                <div className="mt-8 text-center">
                  <button
                    onClick={handlePayment}
                    disabled={loading}
                    className="px-12 py-4 bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-xl font-bold text-lg hover:shadow-lg transition-shadow disabled:opacity-50"
                  >
                    {loading ? 'Processing...' : `Proceed to Pay ₹${plans.find(p => p.id === selectedPlan).price}`}
                  </button>
                  <p className="mt-4 text-sm text-gray-500">
                    Secure payment powered by Razorpay • 100% refund within 7 days
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PaymentModal;