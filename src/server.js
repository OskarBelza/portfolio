const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const Tutoring = require('./models/tutoring');
const User = require('./models/user');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Connected to MongoDB");
});

// Password validation function
const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%.*?&])[A-Za-z\d@$!.%*?&]{8,}$/;
    return regex.test(password);
};

// Registration
app.post('/register', async (req, res) => {
    const { email, name, password } = req.body;

    if (!validatePassword(password)) {
        return res.status(400).json({ message: 'Password does not meet criteria' });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ email, name, password: hashedPassword });
        await user.save();
        res.json({ message: 'Registration successful' });
    } catch (error) {
        res.status(500).json({ message: 'Registration failed' });
    }
});

// Login
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Login failed: Incorrect email or password' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Login failed: Incorrect email or password' });
        }
        res.json({ message: 'Login successful', user });
    } catch (error) {
        res.status(500).json({ message: 'Login failed' });
    }
});

// Get tutoring schedule
app.get('/tutoring', async (req, res) => {
    try {
        const schedule = await Tutoring.find();
        res.json(schedule);
    } catch (error) {
        res.status(500).json({ message: 'Failed to get tutoring schedule' });
    }
});

// Update tutoring schedule
app.put('/tutoring', async (req, res) => {
    try {
        const updatedSchedule = req.body;
        await Tutoring.deleteMany({});
        await Tutoring.insertMany(updatedSchedule);
        res.json({ message: 'Tutoring schedule updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update tutoring schedule' });
    }
});

// Add reservation to user
app.post('/reserve', async (req, res) => {
    try {
        const { userId, day, time } = req.body;
        await User.findByIdAndUpdate(userId, { $push: { bookings: { day, time } } });
        res.json({ message: 'Reservation added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to add reservation' });
    }
});

app.get('/bookings/:userId', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ bookings: user.bookings });
    } catch (error) {
        res.status(500).json({ message: 'Failed to get user bookings' });
    }
});

// Cancel reservation and update tutoring schedule
app.put('/cancel', async (req, res) => {
    try {
        const { userId, day, time } = req.body;
        await User.findByIdAndUpdate(userId, { $pull: { bookings: { day, time } } });
        await Tutoring.findOneAndUpdate({ day }, { $push: { times: time } });
        res.json({ message: 'Reservation canceled successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to cancel reservation' });
    }
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
