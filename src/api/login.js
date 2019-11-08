import ApolloClient from 'apollo-boost';
import { gql } from "apollo-boost";

const client = new ApolloClient({
    uri: 'http://10.2.2.84:8080/graphql',
});
const token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJoZW5yaXF1ZUBlbWFpbC5jb20iLCJleHAiOjE1NzMzMTY0NDAsImlhdCI6MTU3MzIzMDA0MH0.Tbou8hMVjmCo5uB1YduCbvYrOXUunf4NGLaVhSfRRNllS3fgQtQyFxkJt87W2GZLhYVU0k_WfJ81M_djxnkR0A';

const params = {
    method: "POST",
    body: '',
    headers: {
        "Content-Type": "application/json",
        "Authorization": token
    }
};

const LOGINQUERY = gql`
  query Login($email: String!, $password: String!) {
    login(email: $email, password: $password){
      token
    }
  }
`;

const login = (email, password) => {
    return new Promise((resolve, reject) => {
        client
            .query({
                query: LOGINQUERY,
                variables: {
                    email: email,
                    password: password
                }
            })
            .then(result => resolve(result));
    });
}

export default login;