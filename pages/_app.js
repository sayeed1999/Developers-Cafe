import "bootstrap/dist/css/bootstrap.css";
import AppDrawer from "../components/AppDrawer";
import ContextProviders from "../components/ContextProviders";
import Layout from "../components/Layout";
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
