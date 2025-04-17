"use client";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import Appearance from "./appearance";
import Switchaccount from "./switchaccount";
import React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItemButton from "@mui/material/ListItemButton";
import Location from "./location";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import Grid from "@mui/material/Grid";
import Link2 from "@mui/material/Link";
import Language from "./language";
import Keyboard from "./keyboard";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar sx={{ bgcolor: deepOrange[500], width: 30, height: 30 }}>
            R
          </Avatar>
        </IconButton>
      </Box>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <Grid container columnSpacing={2}>
            <Grid size={{ xs: 3 }}>
              <ListItemAvatar></ListItemAvatar>
            </Grid>
            <Grid size={{ xs: 9 }}>
              <Grid size={{ xs: 12 }}>
                <ListItemText></ListItemText>
              </Grid>
              <Grid size={{ xs: 12 }}>
                <ListItemText> @raymundo</ListItemText>
              </Grid>
              <Grid size={{ xs: 12 }}>
                <Link2 href="#" underline="none" fontSize="medium">
                  {"View your channel"}
                </Link2>
              </Grid>
            </Grid>
          </Grid>
        </MenuItem>
        <Divider />
        <ListItemButton onClick={handleClose}>
          <ListItemIcon>
            <AccountCircleOutlinedIcon />
          </ListItemIcon>
          <ListItemText>Your account</ListItemText>
        </ListItemButton>

        <Switchaccount />
        <ListItemButton onClick={handleClose}>
          <ListItemIcon>
            <LogoutOutlinedIcon />
          </ListItemIcon>
          <ListItemText>Sign out</ListItemText>
        </ListItemButton>

        <Divider />

        <Appearance />
        <Language />
        <Location />
        <Keyboard />

        <Divider />
        <ListItemButton onClick={handleClose}>
          <ListItemIcon>
            <SettingsOutlinedIcon fontSize="small" />
          </ListItemIcon>
          Settings
        </ListItemButton>
        <Divider />

        <ListItemButton onClick={handleClose}>
          <ListItemIcon>
            <HelpOutlineOutlinedIcon fontSize="small" />
          </ListItemIcon>
          Help
        </ListItemButton>

        <ListItemButton onClick={handleClose}>
          <ListItemIcon>
            <FeedbackOutlinedIcon fontSize="small" />
          </ListItemIcon>
          Send feedback
        </ListItemButton>
      </Menu>
    </React.Fragment>
  );
}
