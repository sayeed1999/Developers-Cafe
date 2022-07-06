import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import React from "react";
import { Provider } from "react-redux";
import swal from "sweetalert";
import Layout from "../components/Layout";
import Loader from "../components/Loader";
import store from "../store";
import "../styles/globals.css";
import { useSaveScrollPosition } from "../utils/hooks/scroll";

axios.interceptors.request.use((req) => {
  req.headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
    "Access-Control-Allow-Headers":
      "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization",
    "Access-Control-Allow-Credentials": "true",
    Authorization: "Bearer " + localStorage.getItem("token"),
  };
  return req;
});

axios.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    if (err.response.status === 0) {
      swal({
        text: "Please check your internet connection!",
        icon: "error",
      });
    } else {
      const error = err.response.data.error;
      swal({
        text: error.message,
        icon: "error",
      });
    }
  }
);

function MyApp({ Component, pageProps }) {
  useSaveScrollPosition();

  return (
    <React.Fragment>
      <Head>
        <title>Developer&apos;s Cafe, BD 🔥</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Provider store={store}>
        <Loader />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </React.Fragment>
  );
}

export default MyApp;
