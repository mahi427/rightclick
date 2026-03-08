const express = require('express');
const router = express.Router();
const { 
  createCheckoutSession,
  handleWebhook,
  getSubscriptionStatus,
  cancelSubscription 
} = require('../controllers/subscriptionController');
const { protect } = require('../middleware/auth');

router.post('/create-checkout', protect, createCheckoutSession);
router.post('/webhook', express.raw({type: 'application/json'}), handleWebhook);
router.get('/status', protect, getSubscriptionStatus);
router.post('/cancel', protect, cancelSubscription);

module.exports = router;