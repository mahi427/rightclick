const User = require('../models/User');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// @desc    Create subscription checkout session
// @route   POST /api/subscription/create-checkout
const createCheckoutSession = async (req, res) => {
  try {
    const { plan } = req.body;
    const user = req.user;

    const prices = {
      monthly: process.env.STRIPE_MONTHLY_PRICE_ID,
      yearly: process.env.STRIPE_YEARLY_PRICE_ID
    };

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: prices[plan],
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${process.env.FRONTEND_URL}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.FRONTEND_URL}/pricing`,
      customer_email: user.email,
      client_reference_id: user._id.toString(),
      metadata: {
        userId: user._id.toString(),
        plan: plan
      }
    });

    res.json({ sessionId: session.id, url: session.url });
  } catch (error) {
    res.status(500).json({ message: 'Error creating checkout session' });
  }
};

// @desc    Handle Stripe webhook
// @route   POST /api/subscription/webhook
const handleWebhook = async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the checkout.session.completed event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const userId = session.metadata.userId;
    const plan = session.metadata.plan;

    // Calculate subscription end date
    const endDate = new Date();
    if (plan === 'monthly') {
      endDate.setMonth(endDate.getMonth() + 1);
    } else if (plan === 'yearly') {
      endDate.setFullYear(endDate.getFullYear() + 1);
    }

    // Update user subscription
    await User.findByIdAndUpdate(userId, {
      'subscription.isActive': true,
      'subscription.plan': plan,
      'subscription.startDate': new Date(),
      'subscription.endDate': endDate,
      'subscription.stripeCustomerId': session.customer,
      'subscription.stripeSubscriptionId': session.subscription
    });
  }

  res.json({ received: true });
};

// @desc    Get subscription status
// @route   GET /api/subscription/status
const getSubscriptionStatus = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    res.json({
      isActive: user.subscription.isActive,
      plan: user.subscription.plan,
      endDate: user.subscription.endDate,
      freeTestsUsed: user.freeTestsUsed,
      freeTestsRemaining: Math.max(0, 3 - user.freeTestsUsed)
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Cancel subscription
// @route   POST /api/subscription/cancel
const cancelSubscription = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    
    if (user.subscription.stripeSubscriptionId) {
      await stripe.subscriptions.update(
        user.subscription.stripeSubscriptionId,
        { cancel_at_period_end: true }
      );
    }

    user.subscription.isActive = false;
    await user.save();

    res.json({ message: 'Subscription cancelled' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  createCheckoutSession,
  handleWebhook,
  getSubscriptionStatus,
  cancelSubscription
};