const checkSubscription = async (req, res, next) => {
  try {
    const user = req.user;
    
    // Check if user has active subscription
    if (user.subscription.isActive) {
      req.canDownload = true;
      return next();
    }
    
    // Check free test usage
    if (user.freeTestsUsed < 3) {
      req.canDownload = true;
      req.isFreeDownload = true;
      return next();
    }
    
    // No subscription and free tests exhausted
    res.status(403).json({ 
      message: 'Free tests exhausted. Please subscribe to continue.',
      requiresSubscription: true 
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = checkSubscription;