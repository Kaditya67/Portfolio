const express = require('express');
const router = express.Router();
const experienceController = require('../controllers/experiences.controllers');
 
router.post('/', experienceController.createExperience);
 
router.get('/', experienceController.getAllExperiences);
 
router.get('/:id', experienceController.getExperienceById);
 
router.put('/:id', experienceController.updateExperience);
 
router.delete('/:id', experienceController.deleteExperience);

module.exports = router;
