const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    trips: [Trip]!
  }

  type Trip {
    _id: ID
    destinationName: String
    createdAt: String
    activities: [Activity]!
  }

  type Activity {
    _id: ID
    createdAt: String
    category: String
    name: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    trips(username: String): [Trip]
    trip(tripId: ID!): Trip
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addTrip(destinationName: String!): Trip
    addActivity(tripId: ID!, category: String!, name: String!, link: String!): Trip
  }
`;

module.exports = typeDefs;
