import { gql } from '@apollo/client';

export const login = gql`
  mutation login($username: String!, $password: String!) {
    loginAdmin(loginInput: { username: $username, password: $password }) {
      accessToken
      refreshToken
    }
  }
`;
