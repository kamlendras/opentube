import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import SwitchAccountOutlinedIcon from "@mui/icons-material/SwitchAccountOutlined";
export default function NestedList() {
  const loading = status === "loading";
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (index: React.SetStateAction<number>) => {
    setSelectedIndex(index);
  };
  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <SwitchAccountOutlinedIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText> Switch account</ListItemText>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List sx={{ pl: 3 }} component="div" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PersonAddAltIcon />
            </ListItemIcon>
            <ListItemText primary="add account" />
          </ListItemButton>
        </List>
      </Collapse>
    </>
  );
}
