import React, { useState, useEffect } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import { Typography, TextField, Box, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

// components
import MDButton from "../MDButton";

//images
import defaultImg from "../../assets/images/profilePictures/DefaultProfilePic.png";

function ProfileCard({ img, name, email, position, address, information, mobile }) {
  const initialUser = {
    Email: email,
    Position: position,
    Mobile: mobile,
    Address: address,
    Information: information,
  };

  const [user, setUser] = useState(initialUser);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
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
        <Box>
          <IconButton onClick={handleEditClick}>
            <EditIcon />
          </IconButton>
        </Box>
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
      <div style={{ marginTop: "1rem" }}>
        <div>
          <TextField
            required
            label="Email"
            name="email"
            fullWidth
            value={user.Email}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ marginTop: "1rem", width: "49%" }}>
            <TextField
              required
              label="Position"
              name="position"
              fullWidth
              value={user.Position}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div style={{ marginTop: "1rem", width: "49%" }}>
            <TextField
              required
              label="Mobile"
              name="mobile"
              fullWidth
              value={user.Mobile}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
        </div>
        <div style={{ marginTop: "1rem" }}>
          <TextField
            required
            label="Address"
            name="address"
            fullWidth
            value={user.Address}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>
        <div style={{ marginTop: "1rem" }}>
          <TextField
            label="More Information"
            name="information"
            fullWidth
            value={user.Information}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>
        {isEditing && (
          <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
            <MDButton color="info" onClick={handleSaveClick}>
              Save
            </MDButton>
          </div>
        )}
      </div>
    </Card>
  );
}

// Setting default values for the props of WardCard
ProfileCard.defaultProps = {};
// Typechecking props for the WardCard
ProfileCard.propTypes = { img: PropTypes.string, name: PropTypes.string.isRequired };

export default ProfileCard;
