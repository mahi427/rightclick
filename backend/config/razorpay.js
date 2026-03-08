import Razorpay from 'razorpay';
import dotenv from 'dotenv';

dotenv.config();

export const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export const subscriptionPlans = {
  monthly: {
    planId: 'plan_monthly', // Create this in Razorpay dashboard
    price: 299,
    name: 'Monthly Test Series Access',
    duration: 30 // days
  },
  yearly: {
    planId: 'plan_yearly',
    price: 1499,
    name: 'Yearly Test Series Access',
    duration: 365 // days
  },
  lifetime: {
    planId: 'plan_lifetime',
    price: 2999,
    name: 'Lifetime Test Series Access',
    duration: null // unlimited
  }
};