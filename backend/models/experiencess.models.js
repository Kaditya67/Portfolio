const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    period: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }   
);
 
const Experience = mongoose.model('Experience', experienceSchema);

module.exports = Experience;
