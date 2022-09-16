import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  from
} from "@apollo/client/core/index.js";
import fetch from "cross-fetch";
import { onError } from "@apollo/client/link/error/error.cjs";


const ENDPOINT = `https://api.spacex.land/graphql`;

const httpLink = createHttpLink({
  uri: ENDPOINT,
  fetch,
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
  }

  if (networkError) {
    console.error(`[Network error]: ${networkError}`);
  }
});

const isServer = typeof window === "undefined";

/**
 * Apollo client configuration for SSR.
 * Disabling apollo cache for SSR requests.
 */
const ssrOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
};

export default new ApolloClient({
  ssrMode: isServer,
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache(),
  defaultOptions: isServer ? ssrOptions : null,
});
