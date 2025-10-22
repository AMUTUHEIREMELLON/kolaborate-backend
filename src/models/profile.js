const mongoose = require('mongoose');
const profileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  location: { type: String, required: true },
  skills: [{ type: String }],
  experienceYears: { type: Number, required: true, min: 0 },
  availableForWork: { type: Boolean, default: true },
  hourlyRate: { type: Number, required: true, min: 0 },
});
module.exports = mongoose.model('Profile', profileSchema);