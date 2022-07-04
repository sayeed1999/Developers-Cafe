import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "../store/reducers/authReducer";
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
        <div className="row d-flex justify-content-center">
          <div className="col-11 col-sm-9 col-md-7 col-lg-6">
            {props.children}
          </div>
        </div>
      )}
      <div style={{ height: "5vh" }}></div>
      <div
        style={{
          backgroundColor: "#000",
          color: "#fff",
          width: "100%",
          height: "5vh",
          position: "fixed",
          zIndex: "10",
          bottom: "0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
