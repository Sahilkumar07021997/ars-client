import React, { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ReorderRounded as ReorderRoundedIcon } from "@mui/icons-material";

const LeftDrawer = (props) => {
  const [state, setState] = useState({ left: false });
  const { menuItems, tabChange } = props;

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    )
      return;
    setState({ ...state, [anchor]: open });
  };

  const renderMenuItems = (items) =>
    items.map((item, index) => (
      <ListItem key={item.text} disablePadding>
        <ListItemButton
          onClick={() => {
            tabChange(item);
          }}
        >
          <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
          <ListItemText sx={{ fontSize: 15 }} primary={item.text} />
        </ListItemButton>
      </ListItem>
    ));

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 300,
        backgroundColor: "#343148FF",
        height: "100vh",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="drawer-list-container">
        <List className="drawer-list-item-primary">
          {renderMenuItems(menuItems.primaryMenuItems)}
        </List>
        <List className="drawer-list-item-secondary">
          {renderMenuItems(menuItems.secondaryMenuItems)}
        </List>
      </div>
    </Box>
  );

  return (
    <div className="drawer">
      <ReorderRoundedIcon
        fontSize={"large"}
        onMouseEnter={toggleDrawer("left", true)}
        onClick={toggleDrawer("left", true)}
      ></ReorderRoundedIcon>
      <Drawer
        anchor="left"
        open={state.left}
        onClose={toggleDrawer("left", false)}
        transitionDuration={{ enter: 200, appear: 200, exit: 180 }} // Faster transition open close drawer
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
          backdropFilter: "blur(5px)", // Apply blur effect
          color: "white",
        }}
      >
        {list("left")}
      </Drawer>
    </div>
  );
};

export default LeftDrawer;
