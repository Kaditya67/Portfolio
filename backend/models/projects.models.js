const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    links: {
        type: String,
      required: true,
    },
    video: {
      type: String,
      default: "",
    },
    technologies: {
      type: [String],  
      required: true,
    },
    images: {
      type: [String], 
      required: true,
    },
  },
  { timestamps: true }  
); 

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
