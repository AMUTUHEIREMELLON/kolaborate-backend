const Profile = require('../models/profile');

exports.createProfile = async (req, res) => {
  try {
    const profile = new Profile(req.body);
    await profile.save();
    res.status(201).json(profile);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getProfiles = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const profiles = await Profile.find().skip(skip).limit(limit);
    const total = await Profile.countDocuments();
    res.json({ profiles, total, page, pages: Math.ceil(total / limit) });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.searchProfiles = async (req, res) => {
  try {
    const { skills } = req.query;
    const query = skills ? { skills: { $in: skills.split(',') } } : {};
    const profiles = await Profile.find(query);
    res.json(profiles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getProfileById = async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id);
    if (!profile) return res.status(404).json({ error: 'Profile not found' });
    res.json(profile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const profile = await Profile.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!profile) return res.status(404).json({ error: 'Profile not found' });
    res.json(profile);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};