import ApolloClient from 'apollo-boost';
import {gql} from 'apollo-boost';
let token = '';
let client = new ApolloClient({
  uri: 'http://10.2.2.84:8080/graphql',
  request: operation => {
    operation.setContext({
      headers: {
        Authorization: token ? `Bearer ${token}` : '',
      },
    });
  },
});

let setClient = token => {
  client = new ApolloClient({
    uri: 'http://10.2.2.84:8080/graphql',
    request: operation => {
      operation.setContext({
        headers: {
          Authorization: token ? `Bearer ${token}` : '',
        },
      });
    },
  });
};

const LOGIN_QUERY = gql`
  query Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      email
      role
      password
    }
  }
`;

export const login = (email, password) => {
  return new Promise((resolve, reject) => {
    client
      .query({
        query: LOGIN_QUERY,
        variables: {
          email: email,
          password: password,
        },
      })
      .then(result => resolve(result));
  });
};

export const getUsers = token => {
  setClient(token);
  return new Promise((resolve, reject) => {
    client
      .query({
        query: GET_USERS,
        variables: {},
      })
      .then(result => resolve(result));
  });
};
