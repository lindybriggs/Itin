import { gql } from '@apollo/client';

export const QUERY_USER = gql`
 query Query($username: String!) {
  user(username: $username) {
    _id
    username
    email
    trips {
      _id
      destinationName
      createdAt
    }
  }
}
`;

export const QUERY_TRIPS = gql`
  query Query($username: String) {
  trips(username: $username) {
    _id
    destinationName
    createdAt
    activities {
      _id
      category
      name
      link
      createdAt
    }
  }
}
`;

export const QUERY_SINGLE_TRIP = gql`
 query Query($tripId: ID!) {
  trip(tripId: $tripId) {
    _id
    destinationName
    createdAt
    activities {
      _id
      category
      name
      link
      createdAt
    }
  }
}
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      trips {
        _id
        destinationName
        createdAt
      }
    }
  }
`;
