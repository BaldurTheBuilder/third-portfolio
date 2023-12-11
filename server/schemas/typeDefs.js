const { gql } = require("apollo-server-express");

const typeDefs = gql`
  # type User {
  #   _id: ID
  #   username: String
  #   firstName: String
  #   lastName: String
  #   email: String
  #   password: String
  #   description: String
  #   skills: [String]
  #   # createdTasks: [Task]
  #   # assignedTasks: [Task]
  #   # watchedTasks: [Task]
  #   # # fundedTasks: [FundingInfo]
  #   # fundedTasks: [Task]
  # }

  # type FundingInfo {
  #   fundedTask: Task
  #   funding: String
  # }

  # type FundingUsers {
  #   username: String
  #   funding: String
  # }

  type Project {
    _id: ID
    projectTitle: String
    briefDescription: String
    techUsed: [String]
    detailedDescription: String
    repoLink: String
    liveLink: String
    image: String
  }

  type Query {
    # users: [User]!
    projects: [Project]!
    # unclaimedTasks: [Task]
    # user(userId: ID!): [User]!
  }

  # type Auth {
  #   token: ID!
  #   user: User
  # }

  type Mutation {
    updateImage(projectTitle: String!, image: String!): Project
  #   # addUser(username: String!, email: String!, password: String!, firstName: String!): Auth
  #   # login(email: String!, password: String!): Auth
  #   # addTask(taskName: String!, description: String!): Task
  }
`;

module.exports = typeDefs;
