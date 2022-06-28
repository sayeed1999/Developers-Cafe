import { ListItemButton, ListItemText } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useRouter } from "next/router";
import * as React from "react";
import AppRoutes from "../constants/AppRoutes";
import AppNavBar from "./AppNavBar";

const AppDrawer = ({ children }) => {
  const [state, setState] = React.useState(false);
  const anchor = "left";
  const router = useRouter();

  const toggleDrawer = (open) => {
    setState(open);
  };

  const list = () => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText
              primary="Home"
              onClick={() => router.push(AppRoutes.Home)}
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText
              primary="Chit-Chat"
              onClick={() => router.push(AppRoutes.ChitChat)}
            />
          </ListItemButton>
        </ListItem>

        {/* <ListItem disablePadding>
          <ListItemButton>
            <ListItemText
              primary="Cafe"
              onClick={() => router.push(AppRoutes.Cafe)}
            />
          </ListItemButton>
        </ListItem> */}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={anchor}>
        <AppNavBar toggleDrawer={() => toggleDrawer(true)} />
        <Drawer
          anchor={anchor}
          open={state}
          onClose={() => toggleDrawer(false)}
        >
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default AppDrawer;
