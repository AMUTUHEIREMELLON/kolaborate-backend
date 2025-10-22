const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const profileRoutes = require('./routes/profileRoutes');
require('dotenv').config();


const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

console.log('MONGODB_URI:', process.env.MONGODB_URI);

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('MongoDB connection error:', err));

// Mount the profile routes
app.use('/api/profiles', profileRoutes);

// Test route (worked previously)
const Profile = require('./models/profile');
app.post('/test-profile', async (req, res) => {
  try {
    const profile = new Profile({
      name: 'Test User',
      email: 'test@example.com',
      location: 'Test City',
      skills: ['JavaScript'],
      experienceYears: 3,
      hourlyRate: 30,
      availableForWork: true,
    });
    await profile.save();
    res.status(201).json(profile);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/', (req, res) => res.send('API is running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));