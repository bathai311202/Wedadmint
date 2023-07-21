import { gql } from '@apollo/client';

export const getNewTokenAPI = gql`
  mutation refreshToken($refreshToken: String!) {
    refreshToken(refreshTokenInput: { refreshToken: $refreshToken }) {
      accessToken
      refreshToken
    }
  }
`;
