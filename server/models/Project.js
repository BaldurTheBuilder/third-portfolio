const { Schema, model } = require('mongoose');

// I intend on using a database to store my project information.
// the information I'll need includes:
// title
// image
// date added
// date project last worked on
// brief description
// more in-depth description
// link to github
// link to live site (if live)

const projectSchema = new Schema({
    // taskAuthor: {
    //     type: String,
    //     required: true,
    //     trim: true
    // },
    // assignedUser: {
    //     type: String,
    //     trim: true
    // },
    // watchingUsers: [
    //   {type: String}
    // ],
    projectName: {
      type: String,
      required: "Your project needs a title!",
      unique: true
    }/*, */
    // description: {
    //   type: String,
    //   required: "Your task needs a description!",
    // },
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