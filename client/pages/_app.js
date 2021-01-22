import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const GlobalStyle = createGlobalStyle`
${reset}
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
body {
  font-family: 'Open Sans', sans-serif;
}
`;

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:4000/graphql",
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
