import ApolloClient from 'apollo-boost';
import { gql } from "apollo-boost";

const client = new ApolloClient({
    uri: 'http://10.2.2.84:8080/graphql',
    request: (operation) => {
        const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJoZW5yaXF1ZUBlbWFpbC5jb20iLCJleHAiOjE1NzMzMTY0NDAsImlhdCI6MTU3MzIzMDA0MH0.Tbou8hMVjmCo5uB1YduCbvYrOXUunf4NGLaVhSfRRNllS3fgQtQyFxkJt87W2GZLhYVU0k_WfJ81M_djxnkR0A';
        operation.setContext({
            headers: {
                authorization: token ? `Bearer ${token}` : ''
            }
        })
    }
});

const token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJoZW5yaXF1ZUBlbWFpbC5jb20iLCJleHAiOjE1NzM1NjU5MDgsImlhdCI6MTU3MzQ3OTUwOH0.emkW5P9C-3ChFH7s2yuE0cWnUpztJ_ueql2G6hShC5LapAkjewrUG_LtvyHAXMVkmYI1rxXFiPK6IDIcJlziZw';

const params = {
    method: "POST",
    body: '',
    headers: {
        "Content-Type": "application/json",
        "Authorization": token
    }
};

const LOGIN_QUERY = gql`
  query Login($email: String!, $password: String!) {
    login(email: $email, password: $password){
      token
    }
  }
`;



const GET_USERS = gql`
query GetUsers {
  users{
    id,
    email,
    role,
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
                    password: password
                }
            })
            .then(result => resolve(result));
    });
}

export const getUsers = () => {
    return new Promise((resolve, reject) => {
        client
            .query({
                query: GET_USERS,
                variables: {}
            })
            .then(result => resolve(result));
    });
}