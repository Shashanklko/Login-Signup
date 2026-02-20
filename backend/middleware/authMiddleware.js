const jwt = require('jsonwebtoken');

// Middleware to verify JWT token from Authorization header
const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    // Check if Authorization header exists and starts with "Bearer"
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    const token = authHeader.split(' ')[1];

    try {
        // Verify token and attach decoded payload to request
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid or expired token.' });
    }
};

module.exports = authMiddleware;
