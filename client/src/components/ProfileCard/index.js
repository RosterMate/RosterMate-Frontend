import React, { useState, useEffect } from "react";
import Axios from "axios";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import { Typography, TextField, Box, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

// components and helpers
import MDButton from "../MDButton";
import { isEmailValid } from "../../helpers/validators";
import { USER_EMAIL, USER_TYPE } from "layouts/authentication/sign-in";
import PasswoedChange from "components/PasswordChange";

// base url for the backend
import BASE_URL from "config/baseUrl";

//images
import defaultImg from "assets/images/profilePictures/DefaultProfilePic.png";

function ProfileCard({ img, name, email, position, address, Specialization, mobile }) {
  const initialUser = {
    Email: email,
    Position: position,
    Mobile: mobile,
    Address: address,
    Specialization: Specialization,
    Type: USER_TYPE,
  };

  const [user, setUser] = useState(initialUser);
  const [isEditing, setIsEditing] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const formData = new FormData();

  const handleImageUpload = (event) => {
    const selectedFile = event.target.files[0];
    formData.append("image", selectedFile);
    formData.append("email", USER_EMAIL);
    formData.append("type", USER_TYPE);
  };
  const handleSaveClick = () => {
    if (!isEmailValid(user.Email)) {
      setErrorMsg("Enter a valid email address*");
    } else if (user.Mobile.length !== 10) {
      setErrorMsg("Enter a valid mobile number*");
    } else {
      setErrorMsg("");

      Axios.post(`${BASE_URL}mainApp/changeData`, user)
        .then((response) => {
          if (response.data["msg"] === "error") {
            alert("Error when changing details");
          }
          setIsEditing(false);
        })
        .catch((error) => {
          console.error("Error when changing details:", error);
        });
    }
    console.log(formData);
    if (formData !== null) {
      Axios.post(`${BASE_URL}mainApp/uploadImg`, formData)
        .then((response) => {
          console.log(response.data["msg"]);
        })
        .catch((error) => {
          console.error("Error when uploading image:", error);
        });
    } else {
      console.log("No image selected");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  const [open, setOpen] = useState(false);

  const handleChangePassword = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // styles for the text based on the editing modes
  const textStyles = {
    color: isEditing ? "black" : "black",
    fontWeight: isEditing ? "normal" : "bold",
  };

  return (
    <Card
      style={{
        width: "100%",
        padding: "1rem",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="h4">{name}</Typography>
        {!isEditing && (
          <Box>
            <IconButton onClick={handleEditClick}>
              <EditIcon />
            </IconButton>
          </Box>
        )}
      </div>
      <img
        src={img ? img : defaultImg}
        alt={name}
        style={{
          height: "13rem",
          width: "13rem",
          borderRadius: "1rem",
          alignSelf: "center",
        }}
      />
      {isEditing && (
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="body4" style={{ alignSelf: "flex-start" }}>
            Upload a new profile picture :
          </Typography>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              disabled={!isEditing}
            />
          </div>
        </div>
      )}

      <div style={{ marginTop: "1rem" }}>
        <div>
          <TextField
            required
            label="Email"
            name="Email"
            fullWidth
            disabled
            value={user.Email}
            //onChange={handleChange}
            InputProps={{
              style: textStyles,
            }}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ marginTop: "1rem", width: "49%" }}>
            <TextField
              label="Position"
              name="Position"
              fullWidth
              value={user.Position}
              //onChange={handleChange}
              disabled
              InputProps={{
                style: textStyles,
              }}
            />
          </div>
          <div style={{ marginTop: "1rem", width: "49%" }}>
            <TextField
              required
              label="Mobile"
              name="Mobile"
              fullWidth
              value={user.Mobile}
              onChange={handleChange}
              disabled={!isEditing}
              InputProps={{
                inputProps: {
                  maxLength: 10,
                  style: textStyles,
                },
              }}
            />
          </div>
        </div>
        <div style={{ marginTop: "1rem" }}>
          <TextField
            required
            label="Address"
            name="Address"
            fullWidth
            value={user.Address}
            onChange={handleChange}
            disabled={!isEditing}
            InputProps={{
              style: textStyles,
            }}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ marginTop: "1rem", width: "49%" }}>
            <TextField
              label="Specialization"
              name="Specialization"
              fullWidth
              value={user.Specialization}
              onChange={handleChange}
              disabled={!isEditing}
              InputProps={{
                style: textStyles,
              }}
            />
          </div>
          <div style={{ marginTop: "1rem", width: "49%" }}>
            <MDButton onClick={handleChangePassword} fullWidth color="info">
              Change Password
            </MDButton>
          </div>
        </div>

        {errorMsg && (
          <Typography variant="body2" color="error" style={{ alignSelf: "flex-start" }}>
            {errorMsg}
          </Typography>
        )}
        {isEditing && (
          <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
            <MDButton color="info" onClick={handleSaveClick}>
              Save
            </MDButton>
          </div>
        )}
      </div>
      <PasswoedChange
        open={open}
        handleClose={handleClose}
        message="Password changed successfully"
      />
    </Card>
  );
}

// Setting default values for the props of WardCard
ProfileCard.defaultProps = {};
// Typechecking props for the WardCard
ProfileCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  Specialization: PropTypes.string,
  mobile: PropTypes.string.isRequired,
};

export default ProfileCard;
