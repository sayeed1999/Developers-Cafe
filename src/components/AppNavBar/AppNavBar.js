import Logout from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, IconButton, Toolbar, Tooltip } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import AppRoutes from "../../constants/AppRoutes";
import { AuthContext } from "../../contexts/AuthContext";

const AppNavBar = ({ toggleDrawer }) => {
  const { currentUser, logout } = React.useContext(AuthContext);
  const navigate = useNavigate();

  const onLogoutPress = async () => {
    await logout()
      .then(() => {
        navigate(AppRoutes.Home);
        alert("Success!");
      })
      .catch((err) => {
        alert(err.message);
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
              Problem Solver's Caffe
            </Typography>
            {!currentUser && (
              <Button
                color="inherit"
                onClick={() => navigate(AppRoutes.Signup)}
              >
                Signup
              </Button>
            )}
            {!currentUser && (
              <Button color="inherit" onClick={() => navigate(AppRoutes.Login)}>
                Login
              </Button>
            )}
            {!!currentUser && (
              <Typography
                variant="h6"
                style={{
                  textDecoration: "underline",
                  fontWeight: "100",
                  marginRight: "5px",
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
