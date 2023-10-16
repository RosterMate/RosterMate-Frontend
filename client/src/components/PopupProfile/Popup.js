import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

function ProfileModal({ open, handleClose, name, position, img }) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle sx={{ textAlign: "center", fontSize: "2rem" }}>{name}</DialogTitle>{" "}
      {/* Increase font size and center text */}
      <DialogContent>
        <img
          src={img}
          alt={name}
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />{" "}
        {/* Center image */}
        <DialogContentText sx={{ textAlign: "center" }}>{position}</DialogContentText>{" "}
        {/* Center text */}
      </DialogContent>
    </Dialog>
  );
}

export default ProfileModal;
