import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import swal from "sweetalert";
import Layout from "../components/Layout";
import Loader from "../components/Loader";
import store from "../store";
import "../styles/globals.css";

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
  const router = useRouter();

  useEffect(() => {
    // event listener to listen for window scroll events & keep track of current (scrollX, scrollY) position.
    addEventListener(
      "scroll",
      () => {
        if (scrollY > 0) {
          sessionStorage.setItem(window.location.pathname, scrollY);
        }
      },
      true
    );
  }, []); // -> [] renders only on first render, while no dependency array runs on every render

  return (
    <React.Fragment>
      <Head>
        <title>Developer&apos;s Cafe, BD 🔥</title>
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
