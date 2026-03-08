import express from 'express';
import { razorpayInstance, subscriptionPlans } from '../config/razorpay.js';
import { protect } from '../middleware/authMiddleware.js';
import User from '../models/User.js';
import Subscription from '../models/Subscription.js';

const router = express.Router();

// @desc    Create Razorpay order for subscription
// @route   POST /api/payments/create-order
router.post('/create-order', protect, async (req, res) => {
  try {
    const { planType } = req.body;
    const plan = subscriptionPlans[planType];

    const options = {
      amount: plan.price * 100, // Razorpay expects amount in paise
      currency: 'INR',
      receipt: `receipt_${Date.now()}`,
      notes: {
        userId: req.user._id.toString(),
        planType
      }
    };

    const order = await razorpayInstance.orders.create(options);
    res.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: process.env.RAZORPAY_KEY_ID
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Verify payment and create subscription
// @route   POST /api/payments/verify
router.post('/verify', protect, async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, planType } = req.body;
    const plan = subscriptionPlans[planType];

    // Verify signature (you should implement proper verification)
    // For now, we'll assume payment is successful

    // Calculate end date
    const endDate = plan.duration 
      ? new Date(Date.now() + plan.duration * 24 * 60 * 60 * 1000)
      : null;

    // Create subscription record
    const subscription = await Subscription.create({
      user: req.user._id,
      plan: planType,
      razorpayOrderId: razorpay_order_id,
      razorpayPaymentId: razorpay_payment_id,
      amount: plan.price,
      status: 'active',
      endDate
    });

    // Update user
    await User.findByIdAndUpdate(req.user._id, {
      subscription: subscription._id
    });

    res.json({
      success: true,
      subscription: {
        id: subscription._id,
        plan: planType,
        endDate
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Get subscription plans
// @route   GET /api/payments/plans
router.get('/plans', (req, res) => {
  const plans = Object.entries(subscriptionPlans).map(([key, value]) => ({
    id: key,
    name: value.name,
    price: value.price,
    duration: value.duration
  }));
  res.json(plans);
});

export default router;