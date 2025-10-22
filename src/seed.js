const mongoose = require('mongoose');
const Profile = require('./models/profile');
require('dotenv').config();

const seedProfiles = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  await Profile.deleteMany({});
  const profiles = [
    { name: 'John Doe', email: 'john@example.com', location: 'New York', skills: ['React', 'Node.js'], experienceYears: 5, availableForWork: true, hourlyRate: 50 },
    { name: 'Jane Smith', email: 'jane@example.com', location: 'San Francisco', skills: ['Python', 'Django'], experienceYears: 3, availableForWork: false, hourlyRate: 40 },
    { name: 'Alice Johnson', email: 'alice@example.com', location: 'London', skills: ['Java', 'Spring'], experienceYears: 7, availableForWork: true, hourlyRate: 60 },
    { name: 'Bob Brown', email: 'bob@example.com', location: 'Berlin', skills: ['Vue', 'Node.js'], experienceYears: 4, availableForWork: true, hourlyRate: 45 },
    { name: 'Emma Davis', email: 'emma@example.com', location: 'Toronto', skills: ['Angular', 'TypeScript'], experienceYears: 6, availableForWork: false, hourlyRate: 55 },
  ];
  await Profile.insertMany(profiles);
  console.log('Database seeded');
  mongoose.connection.close();
};

seedProfiles().catch(err => console.error(err));