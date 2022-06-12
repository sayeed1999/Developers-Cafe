import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import { Provider } from "react-redux";
import Layout from "../components/Layout";
import store from "../store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Developer&apos;s Cafe, BD 🔥</title>
      </Head>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
