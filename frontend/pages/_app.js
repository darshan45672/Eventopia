import "../styles/scss/style.scss";
import Layout from "../layout/Layout";

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { SessionProvider } from "next-auth/react"



import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql/",
  cache: new InMemoryCache()
});

function MyApp({ Component,
  pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
    <ApolloProvider client={client}>

    <AlertProvider template={AlertTemplate} {...options}>
      <Layout>
      <Component {...pageProps} />
    </Layout>
    </AlertProvider>

   
    </ApolloProvider>
    </SessionProvider>
  );
}

export default MyApp;
