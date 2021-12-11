import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";

function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default App;