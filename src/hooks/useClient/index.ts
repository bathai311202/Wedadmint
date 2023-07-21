import { RouterPaths } from '@/config';
import { getNewTokenAPI } from '@/graphql';
import { ExceptionError, LANGUAGE } from '@/types';
import { getAccessToken, getRefreshToken, setToken } from '@/utils';
import {
  ApolloClient,
  ApolloLink,
  from,
  fromPromise,
  InMemoryCache,
  RequestHandler,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { createUploadLink } from 'apollo-upload-client';
import i18next from 'i18next';
import _ from 'lodash';
export const useClient = () => {
  let isRefreshing = false;
  const token = getAccessToken();

  const httpLink = createUploadLink({
    uri: import.meta.env.VITE_BASE_URL,
    credentials: 'same-origin',
  });

  const authLink = () => {
    return new ApolloLink((operation, forward) => {
      operation.setContext({
        headers: {
          authorization: token ? `Bearer ${token}` : null,
          'Accept-Language': [LANGUAGE.ja, LANGUAGE.jp].includes(
            i18next.language as LANGUAGE,
          )
            ? LANGUAGE.ja
            : LANGUAGE.en,
        },
      });
      return forward(operation);
    });
  };

  const getNewToken = async () => {
    return await apolloClient
      .mutate({
        mutation: getNewTokenAPI,
        variables: { refreshToken: getRefreshToken() },
      })
      .then((response) => {
        return response;
      });
  };

  const errorLink = onError(
    ({ graphQLErrors, networkError, operation, forward }) => {
      if (graphQLErrors) {
        const isLoginRoute = window.location.pathname.includes(
          RouterPaths.login,
        );
        const isError = graphQLErrors.find((err) => {
          return err.extensions.code === ExceptionError.A000 && !isLoginRoute;
        });

        if (isError && !isRefreshing) {
          isRefreshing = true;
          return fromPromise(
            getNewToken()
              .catch(() => {
                window.location.replace(RouterPaths.login);
                localStorage.clear();
                sessionStorage.clear();
                return false;
              })
              .finally(() => {
                isRefreshing = false;
              }),
          )
            .filter(Boolean)
            .flatMap((response) => {
              const token = _.get(response, 'data.refreshToken', '');

              if (token) {
                setToken({
                  accessToken: _.get(token, 'accessToken'),
                  refreshToken: _.get(token, 'refreshToken'),
                });
              }

              const oldHeaders = operation.getContext().headers;
              operation.setContext({
                headers: {
                  ...oldHeaders,
                  authorization: `Bearer ${_.get(token, 'accessToken')}`,
                },
              });

              return forward(operation).map((res) => {
                setTimeout(() => {
                  window.location.reload();
                });
                return res;
              });
            });
        }
      }
      if (networkError) console.log(`[Network error]: ${networkError}`);
    },
  );

  const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: from([authLink(), errorLink, httpLink as unknown as RequestHandler]),
    queryDeduplication: false,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'ignore',
      },
      query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'none',
      },
      mutate: {
        errorPolicy: 'all',
      },
    },
  });
  return apolloClient;
};
