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
    days: [Day]!
  }

  type Day {
    _id: ID
    createdAt: String
    activites: [Activity]
  }

  type Activity {
    _id: ID
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
    addDay(tripId: ID!): Trip
    addActivity(dayId: ID!, category: String!, name: String!, link: String!): Day
  }
`;

module.exports = typeDefs;
