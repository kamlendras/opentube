import * as React from "react";
import Fab from "@mui/material/Fab";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
export default function Download() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <Fab
        variant="extended"
        size="small"
        sx={{ ml: 0.4, textTransform: "none" }}
        onClick={handleClickOpen}
      >
        <ShareOutlinedIcon sx={{ mr: 1 }} />
        Share
      </Fab>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Share"}</DialogTitle>
        <DialogContent>
       
          <h1>social</h1>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
