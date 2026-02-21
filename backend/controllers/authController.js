const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Register a new user
exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if email already exists
        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            return res.status(409).json({ message: 'Email is already in use' });
        }

        // Check if username already exists
        const existingUsername = await User.findOne({ username });
        if (existingUsername) {
            return res.status(409).json({ message: 'Username is already taken' });
        }

        // Hash password before storing
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user in database
        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
        });

        res.status(201).json({
            message: 'User registered successfully',
            user: { id: newUser._id, username: newUser.username, email: newUser.email }
        });
    } catch (error) {
        console.error('Registration Error:', error);
        res.status(500).json({ message: 'Registration failed during database operation', error: error.message });
    }
};

// Authenticate user and return JWT
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Compare submitted password with stored hash
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Generate JWT with user id, expires in 1 hour
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({
            message: 'Login successful',
            token,
            user: { id: user._id, username: user.username, email: user.email }
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Return authenticated user's profile (requires auth middleware)
exports.getMe = async (req, res) => {
    try {
        // req.user is set by authMiddleware
        const user = await User.findById(req.user.id).select('-password');

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
