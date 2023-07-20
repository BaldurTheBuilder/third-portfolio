const { Schema, model } = require('mongoose');

// I intend on using a database to store my project information.
// the information I'll need includes:
// image
// link to github
// link to live site (if live)

const projectSchema = new Schema({
    projectTitle: {
      type: String,
      required: "Your project needs a title!",
      unique: true
    },
    dateAdded: { 
      type: Date, 
      default: Date.now 
    },
    dateLastWorkedOn: {
      type: Date, 
      default: Date.now 
    },
    detailedDescription: {
      type: String,
      required: "Your project needs a detailed description!",
    },
    briefDescription: {
      type: String,
      required: "Your project needs a brief description!",
    },
    // currentFunding: {
    //   type: Number,
    //   default: 0.0,
    //   min: 0.0,
    // },
    // fundingUsers: [
    //   {
    //     username: {type: String},
    //     funding: {type: String}
    //   }
    // ]
  });

  const Project = model('Project', projectSchema);
  module.exports = Project;