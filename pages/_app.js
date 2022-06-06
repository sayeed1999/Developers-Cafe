import AppDrawer from "../components/AppDrawer/AppDrawer";
import ContextProviders from "../components/ContextProviders/ContextProviders";
import Layout from "../components/Layout/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ContextProviders>
      <AppDrawer />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProviders>
  );
}

export default MyApp;
