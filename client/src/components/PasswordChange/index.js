import React, { useEffect, useState } from "react";
import Axios from "axios";
import { USER_EMAIL, USER_TYPE } from "layouts/authentication/sign-in";

// @mui material components
import { Typography, TextField, Box, IconButton } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

//  components
import PopupModal from "components/PopupModal";
// base url for the backend
import BASE_URL from "config/baseUrl";

function passwordChange({ open, message, handleClose }) {
  const [openModal2, setOpenModal2] = useState(false);

  const handleCloseModal2 = () => {
    setOpenModal2(false);
  };

  const initialUser = {
    email: "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  };
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const [user, setUser] = useState(initialUser);

  const handleOk = () => {
    if (
      user.email === "" ||
      user.newPassword === "" ||
      user.confirmPassword === "" ||
      user.oldPassword === ""
    ) {
      setErrorMessage("*Please fill all the details");
    } else if (user.newPassword !== user.confirmPassword || user.email !== USER_EMAIL) {
      setErrorMessage("*Details does not match");
    } else {
      setErrorMessage("");
      setUser(initialUser);
      Axios.post(`${BASE_URL}mainApp/changePassword`, user)
        .then((response) => {
          if (response.data["msg"] === "error") {
            setOpenModal2(true);
          } else {
            handleClose();
            alert("Password changed successfully");
          }
        })
        .catch((error) => {
          console.error("Error when changing password:", error);
        });
    }
  };
  return (
    <Dialog open={open} onClose={!open}>
      <DialogTitle>Change Password</DialogTitle>

      <div style={{ padding: "10px" }}>
        <TextField
          required
          label="Email"
          name="email"
          fullWidth
          value={user.email}
          onChange={handleChange}
          style={{ padding: "10px" }}
        />
        <TextField
          required
          label="Old Password"
          name="oldPassword"
          fullWidth
          value={user.oldPassword}
          onChange={handleChange}
          style={{ padding: "10px" }}
        />
        <TextField
          required
          label="New Password"
          name="newPassword"
          fullWidth
          value={user.newPassword}
          onChange={handleChange}
          style={{ padding: "10px" }}
        />
        <TextField
          required
          label="Confirm Password"
          name="confirmPassword"
          fullWidth
          value={user.confirmPassword}
          onChange={handleChange}
          style={{ padding: "10px" }}
        />
      </div>
      {errorMessage && (
        <Typography
          variant="body2"
          color="error"
          style={{ alignSelf: "flex-start", padding: "20px" }}
        >
          {errorMessage}
        </Typography>
      )}
      <Button onClick={handleClose} color="primary" autoFocus>
        Calcel
      </Button>
      <Button onClick={handleOk} color="primary" autoFocus>
        OK
      </Button>
      <PopupModal
        open={openModal2}
        message="Details are not correct. Password cannot change."
        onClose={handleCloseModal2}
      />
    </Dialog>
  );
}

export default passwordChange;
