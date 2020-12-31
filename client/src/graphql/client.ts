import { ApolloClient, ApolloLink, createHttpLink, InMemoryCache } from "@apollo/client";

const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
  credentials: 'same-origin'
});

export const appClient = new ApolloClient({
  link: ApolloLink.from([httpLink]),
  cache: new InMemoryCache()
});
