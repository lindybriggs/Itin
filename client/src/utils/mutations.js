import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_TRIP = gql`
  mutation addTrip($destinationName: String!) {
    addTrip(destinationName: $destinationName) {
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

export const ADD_ACTIVITY = gql`
  mutation addActivity($tripId: ID!, $category: String!, $name: String!, $link: String!) {
  addActivity(tripId: $tripId, category: $category, name: $name, link: $link) {
    _id
    destinationName
    createdAt
    activities {
      _id
      createdAt
      category
      name
      link
    }
  }
}
`;