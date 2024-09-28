const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const router = express.Router();

// Generate JWT Token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

// Middleware to verify the JWT token
const protect = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: 'Not authorized' });
            }
            req.user = decoded.id;
            next();
        });
    } else {
        res.status(401).json({ message: 'Not authorized, no token' });
    }
};

// Get user profile
router.get('/profile', protect, async (req, res) => {
    try {
        const user = await User.findById(req.user);
        if (user) {
            res.json({
                name: user.name,
                email: user.email,
                profile: user.profile,
            });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update user profile
router.put('/profile', protect, async (req, res) => {
    const { name, phone, address } = req.body;

    try {
        const user = await User.findById(req.user);
        if (user) {
            user.name = name || user.name;
            user.profile.phone = phone || user.profile.phone;
            user.profile.address = address || user.profile.address;

            const updatedUser = await user.save();
            res.json({
                name: updatedUser.name,
                email: updatedUser.email,
                profile: updatedUser.profile,
            });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update template and customization
router.put('/profile/customization', protect, async (req, res) => {
    const { template, font, color } = req.body;

    try {
        const user = await User.findById(req.user);
        if (user) {
            user.profile.template = template || user.profile.template;
            user.profile.font = font || user.profile.font;
            user.profile.color = color || user.profile.color;

            const updatedUser = await user.save();
            res.json({
                message: 'Customization updated successfully',
                profile: updatedUser.profile,
            });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add work Experience
router.post('/profile/work', protect, async (req, res) => {
    const { company, position, startDate, endDate, description } = req.body;

    try {
        const user = await User.findById(req.user);
        if (user) {
            const newexperiences = { company, position, startDate, endDate, description };
            user.profile.workExperience.push(newexperiences);
            await user.save();
            res.json({ message: 'Work experience added', workExperience: user.profile.workExperience });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Edit work experience
router.put('/profile/work/:id', protect, async (req, res) => {
    const { company, position, startDate, endDate, description } = req.body;

    try {
        const user = await User.findById(req.user);
        if (user) {
            const experience = user.profile.workExperience.id(req.params.id);
            if (experience) {
                experience.company = company || experience.school;
                experience.position = position || experience.position;
                experience.startDate = startDate || experience.startDate;
                experience.endDate = endDate || experience.endDate;
                experience.description = description || experience.description;

                await user.save();
                res.json({ message: 'Work Experience updated', workExperience: user.profile.workExperience });
            } else {
                res.status(404).json({ message: 'education not found' });
            }
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Delete work education
router.delete('/profile/work/:id', protect, async (req, res) => {
    try {
        const user = await User.findById(req.user);
        if (user) {
            user.profile.workExperience = user.profile.workExperience.filter((exp) => exp._id.toString() !== req.params.id);
            await user.save();
            res.json({ message: 'Work experience deleted', workExperience: user.profile.workExperience });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add education
router.post('/profile/education', protect, async (req, res) => {
    const { school, degree, startDate, endDate, description } = req.body;

    try {
        const user = await User.findById(req.user);
        if (user) {
            const newEducation = { school, degree, startDate, endDate, description };
            user.profile.education.push(newEducation);
            await user.save();
            res.json({ message: 'education details added', education: user.profile.education });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Edit work education
router.put('/profile/education/:id', protect, async (req, res) => {
    const { school, degree, startDate, endDate, description } = req.body;

    try {
        const user = await User.findById(req.user);
        if (user) {
            const education = user.profile.education.id(req.params.id);
            if (education) {
                education.school = school || education.school;
                education.degree = degree || education.degree;
                education.startDate = startDate || education.startDate;
                education.endDate = endDate || education.endDate;
                education.description = description || education.description;

                await user.save();
                res.json({ message: 'education updated', education: user.profile.education });
            } else {
                res.status(404).json({ message: 'education not found' });
            }
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Delete work education
router.delete('/profile/work/:id', protect, async (req, res) => {
    try {
        const user = await User.findById(req.user);
        if (user) {
            user.profile.education = user.profile.education.filter((edu) => edu._id.toString() !== req.params.id);
            await user.save();
            res.json({ message: 'education deleted', education: user.profile.education });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


// Register a new user
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const user = new User({ name, email, password });
        await user.save();

        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Login user
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (user && (await user.matchPassword(password))) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                token: generateToken(user._id),
            });
        } else {
            res.status(400).json({ message: 'Invalid email or password' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
