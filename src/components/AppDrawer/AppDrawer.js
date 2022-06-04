import { ListItemButton, ListItemText } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import AppRoutes from "../../constants/AppRoutes";
import AppNavBar from "../AppNavBar/AppNavBar";

const AppDrawer = ({ children }) => {
  const [state, setState] = React.useState(false);
  const anchor = "left";
  const navigate = useNavigate();

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
              onClick={() => navigate(AppRoutes.Home)}
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText
              primary="Chit-Chat"
              onClick={() => navigate(AppRoutes.ChitChat)}
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText
              primary="Caffe"
              onClick={() => navigate(AppRoutes.Caffe)}
            />
          </ListItemButton>
        </ListItem>

        {/* {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))} */}
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
