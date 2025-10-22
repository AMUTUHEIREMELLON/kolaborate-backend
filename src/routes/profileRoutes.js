const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');

router.post('/api/profiles', profileController.createProfile); 
router.get('/api/profiles', profileController.getAllProfiles);
router.get('/api/profiles/search', profileController.searchProfiles); 
router.get('/api/profiles/:id', profileController.getProfileById);
router.put('/api/profiles/:id', profileController.updateProfile);

module.exports = router;