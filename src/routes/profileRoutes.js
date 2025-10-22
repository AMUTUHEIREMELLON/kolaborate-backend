const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');
const { validateProfile } = require('../middleware/validate'); 

router.post('/', profileController.createProfile);
router.get('/', profileController.getAllProfiles);
router.get('/search', profileController.searchProfiles);
router.get('/:id', profileController.getProfileById);
router.put('/:id', profileController.updateProfile);

module.exports = router;