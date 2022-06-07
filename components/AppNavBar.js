import Logout from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, IconButton, Toolbar, Tooltip } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import * as React from "react";
import swal from "sweetalert";
import AppMsgs from "../constants/AppMsgs";
import AppRoutes from "../constants/AppRoutes";
import { AuthContext } from "../contexts/AuthContext";

const AppNavBar = ({ toggleDrawer }) => {
  const { currentUser, logout } = React.useContext(AuthContext);
  const router = useRouter();

  const onLogoutPress = () => {
    logout()
      .then(() => {
        router.push(AppRoutes.Home);
        swal("Success", AppMsgs.LoggedOut, "success");
      })
      .catch((err) => {
        swal("Error", err.message, "error");
      });
  };

  return (
    <>
      <Box
        sx={{ flexGrow: 1 }}
        style={{ position: "fixed", width: "100vw", zIndex: "999" }}
      >
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {"Developer's Cafe"}
            </Typography>
            {!currentUser && (
              <Button
                color="inherit"
                onClick={() => router.push(AppRoutes.Signup)}
              >
                Signup
              </Button>
            )}
            {!currentUser && (
              <Button
                color="inherit"
                onClick={() => router.push(AppRoutes.Login)}
              >
                Login
              </Button>
            )}
            {!!currentUser && (
              <Typography
                variant="overline"
                style={{
                  textDecoration: "underline",
                  marginRight: "5px",
                  fontSize: "12px",
                }}
              >
                Welcome, {currentUser.displayName}!
              </Typography>
            )}
            {!!currentUser && (
              <Tooltip title="Log Out">
                <IconButton color="inherit" onClick={() => onLogoutPress()}>
                  <Logout />
                </IconButton>
              </Tooltip>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <div style={{ height: "80px" }}></div>
    </>
  );
};

export default AppNavBar;
