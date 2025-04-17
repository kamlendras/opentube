import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Fab from "@mui/material/Fab";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import PlaylistAddOutlinedIcon from "@mui/icons-material/PlaylistAddOutlined";
import OutlinedFlagIcon from "@mui/icons-material/OutlinedFlag";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import ContentCutOutlinedIcon from "@mui/icons-material/ContentCutOutlined";
import SubtitlesOutlinedIcon from "@mui/icons-material/SubtitlesOutlined";
export default function Dot() {
const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>

      <Fab size="small" onClick={handleClick} sx={{ ml: 0.4 }}>
        <MoreHorizOutlinedIcon />
      </Fab>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 0,
              height: 0,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <VolunteerActivismOutlinedIcon fontSize="small" />
          </ListItemIcon>
          Donate
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <ContentCutOutlinedIcon fontSize="small" />
          </ListItemIcon>
          Clip
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PlaylistAddOutlinedIcon fontSize="small" />
          </ListItemIcon>
          Save
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <OutlinedFlagIcon fontSize="small" />
          </ListItemIcon>
          Report
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <SubtitlesOutlinedIcon fontSize="small" />
          </ListItemIcon>
          Show Transcript
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
