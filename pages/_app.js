import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import swal from "sweetalert";
import Layout from "../components/Layout";
import Loader from "../components/Loader";
import store from "../store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    axios.interceptors.request.use((req) => {
      req.headers = {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
        "Access-Control-Allow-Headers":
          "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization",
        "Access-Control-Allow-Credentials": "true",
      };
      return req;
    });

    axios.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        const error = err.response.data.error;
        swal({
          text: `"${error.message ?? "Internet connection error"}"`,
          icon: "error",
        });
      }
    );
  }, []);

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
