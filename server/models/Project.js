const { Schema, model } = require('mongoose');

// image storage needed

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
    prominentTech: [{type: String}],
    repoLink: {
      type: String,
      required: "Your project needs a linked Repo."
    },
    liveLink: {
      type: String
    }
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