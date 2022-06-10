import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import AppDrawer from "../components/AppDrawer";
import ContextProviders from "../components/ContextProviders";
import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Developer&apos;s Cafe, BD 🔥</title>
      </Head>
      <ContextProviders>
        <AppDrawer />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ContextProviders>
    </>
  );
}

export default MyApp;
