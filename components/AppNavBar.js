import Logout from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, IconButton, Toolbar, Tooltip } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import AppRoutes from "../constants/AppRoutes";
import { logout } from "../store/reducers/authReducer";

const AppNavBar = ({ toggleDrawer }) => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const authStatus = useSelector((state) => state.auth.status);
  const error = useSelector((state) => state.auth.error);
  const router = useRouter();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getCurrentUser());
  // }, []); // first time only to check authentation state

  // useEffect(() => {
  //   if (authStatus === "succeeded") {
  //     swal({
  //       title: "Success",
  //       text: AppMsgs.LoggedOut,
  //       icon: "success",
  //     });
  //     router.push(AppRoutes.Home);
  //   } else if (authStatus === "failed") {
  //     swal({
  //       title: "Error",
  //       text: error,
  //       icon: "error",
  //     });
  //   }
  //   dispatch(resetStatus());
  // }, [authStatus]);

  const onLogoutPress = () => {
    dispatch(logout());
  };

  return (
    <>
      <Box
        sx={{ flexGrow: 1 }}
        style={{ position: "fixed", width: "100vw", zIndex: "999" }}
      >
        <AppBar>
          <Toolbar>
            <IconButton
              size="medium"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 1 }}
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="inherit" sx={{ flexGrow: 1 }}>
              Developer&apos;s Cafe BD
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
                variant="body2"
                style={{
                  textDecoration: "underline",
                  fontSize: "12px",
                }}
              >
                Hi, {currentUser.displayName}!
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
