import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "../store/reducers/authReducer";
import styles from "../styles/Layout.module.css";
import AppDrawer from "./AppDrawer";

const Layout = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) dispatch(getCurrentUser(token));
  }, []);

  return (
    <div>
      <AppDrawer />
      {router.asPath.includes("/chatroom") ? (
        props.children
      ) : (
        // i don't know why it works! but it works very good
        <div className="d-flex justify-content-center">
          <div className="col-11 col-sm-9 col-md-7 col-lg-6">
            {props.children}
          </div>
        </div>
      )}
      <div style={{ height: "5vh" }}></div>
      <div className={styles.footer}>
        <span style={{ fontSize: "small" }}>
          Developed By:-{" "}
          <a
            href="https://www.facebook.com/mdsayeed.rahman"
            target="_blank"
            rel="noreferrer"
          >
            Md. Sayeed Rahman
          </a>{" "}
          &copy; 2022
        </span>
      </div>
    </div>
  );
};

export default Layout;
