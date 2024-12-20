const Experience = require('../models/experiencess.models.js');  // Assuming the schema is in models/Experience.js

// Create a new experience
exports.createExperience = async (req, res) => {
  try {
    const { company, title, period, description } = req.body;
    
    const newExperience = new Experience({
      company,
      title,
      period,
      description,
    });
    
    await newExperience.save();
    res.status(201).json({ message: 'Experience created successfully', experience: newExperience });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating experience', error: err.message });
  }
};

// Get all experiences
exports.getAllExperiences = async (req, res) => {
  try {
    const experiences = await Experience.find();
    res.status(200).json(experiences);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching experiences', error: err.message });
  }
};

// Get a single experience by ID
exports.getExperienceById = async (req, res) => {
  const { id } = req.params;

  try {
    const experience = await Experience.findById(id);
    if (!experience) {
      return res.status(404).json({ message: 'Experience not found' });
    }
    res.status(200).json(experience);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching experience', error: err.message });
  }
};

// Update an experience by ID
exports.updateExperience = async (req, res) => {
  const { id } = req.params;
  const { company, title, period, description } = req.body;

  try {
    const updatedExperience = await Experience.findByIdAndUpdate(
      id,
      { company, title, period, description },
      { new: true } // Return the updated experience document
    );
    
    if (!updatedExperience) {
      return res.status(404).json({ message: 'Experience not found' });
    }

    res.status(200).json({ message: 'Experience updated successfully', experience: updatedExperience });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating experience', error: err.message });
  }
};

// Delete an experience by ID
exports.deleteExperience = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedExperience = await Experience.findByIdAndDelete(id);
    if (!deletedExperience) {
      return res.status(404).json({ message: 'Experience not found' });
    }

    res.status(200).json({ message: 'Experience deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error deleting experience', error: err.message });
  }
};
