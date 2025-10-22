const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');

router.post('/', profileController.createProfile);
router.get('/', profileController.getProfiles);
router.get('/search', profileController.searchProfiles);
router.get('/:id', profileController.getProfileById);
router.put('/:id', profileController.updateProfile);

module.exports = router;