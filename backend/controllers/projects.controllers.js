const Project = require('../models/projects.models.js');   

// Create a new project
exports.createProject = async (req, res) => {
  try {
    const { title, images, description, links, technologies, video } = req.body;

    const newProject = new Project({
      title,
      images,
      description,
      links,
      technologies,
      video,
    });

    await newProject.save();
    res.status(201).json({ message: 'Project created successfully', project: newProject });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating project', error: err.message });
  }
};

// Get all projects
exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching projects', error: err.message });
  }
};

// Get a single project by ID
exports.getProjectById = async (req, res) => {
  const { id } = req.params;

  try {
    const project = await Project.findById(id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.status(200).json(project);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching project', error: err.message });
  }
};

// Update a project by ID
exports.updateProject = async (req, res) => {
  const { id } = req.params;
  const { title, images, description, links, technologies, video } = req.body;

  try {
    const updatedProject = await Project.findByIdAndUpdate(
      id,
      { title, images, description, links, technologies, video },
      { new: true } // Return the updated project document
    );

    if (!updatedProject) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.status(200).json({ message: 'Project updated successfully', project: updatedProject });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating project', error: err.message });
  }
};

// Delete a project by ID
exports.deleteProject = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProject = await Project.findByIdAndDelete(id);
    if (!deletedProject) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.status(200).json({ message: 'Project deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error deleting project', error: err.message });
  }
};
