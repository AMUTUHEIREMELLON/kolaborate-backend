const { body, validationResult } = require('express-validator');

exports.validateProfile = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('location').notEmpty().withMessage('Location is required'),
  body('skills').isArray().withMessage('Skills must be an array'),
  body('experienceYears').isInt({ min: 0 }).withMessage('Experience years must be a positive number'),
  body('hourlyRate').isFloat({ min: 0 }).withMessage('Hourly rate must be a positive number'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
  },
];