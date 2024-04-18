const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 8);
    }
    next();
});

const User = mongoose.model('User', userSchema);

// POST new user signup
router.post('/createAccount', [
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').isLength({ min: 8 }).withMessage('Password is required to be 8 or more characters')
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(500).send({ message: 'User already exists' });
        }

        // Create new user and hash password
        const user = new User(req.body);

        await user.save();

        // Respond with user data
        res.status(201).send({
            message: 'User has been successfully registered',
            user: {
                email: user.email
            }
        });
    } catch (error) {
        console.error(error);
        res.status(400).send({ message: 'Error with user registration' });
    }
});

// POST user signin
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user by email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).send({ message: 'Incorrect email' });
        }

        // Compare the hashed password
        const isPasswordMatch = await bcrypt.compareSync(password, user.password);
        if (!isPasswordMatch) {
            return res.status(400).send({ message: 'Incorrect password' });
        }

        // Return user data
        const token = jwt.sign({ email },
            '09f26e402586e2faa8da4c98a35f1b20d6b033c6097befa8be3486a829587fe2f90a832bd3ff9d42710a4da095a2ce287b009f0c3730cd9b8e1af3eba4df6615', { expiresIn: '1h' });
        res.json({ token });
        res.status(200).send({
            message: 'Login successful',
            user: {
                email: user.email
            }
        });
    } catch (error) {
        console.error(error);
        res.status(400).send({ message: 'Error logging in' });
    }
});
module.exports = router;