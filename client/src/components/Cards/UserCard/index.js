import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";

// Components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

//images
import defaultImg from "assets/images/profilePictures/DefaultProfilePic.png";
import ProfileModal from "components/PopupProfile/Popup";

function UserCard({ color, name, description, img, email, address, ward, degree, mobile }) {
  const [open, setOpen] = useState(false);

  const handleViewProfileClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card>
        <MDBox p={2} mx={3} display="flex" justifyContent="center">
          <MDBox
            display="grid"
            justifyContent="center"
            alignItems="center"
            bgColor="dark"
            color="white"
            width="4.2rem"
            height="4.2rem"
            shadow="md"
            borderRadius={50}
          >
            <img
              src={img ? img : defaultImg}
              alt={name}
              style={{
                height: "4rem",
                width: "4rem",
                borderRadius: "2rem",
              }}
            />
          </MDBox>
        </MDBox>

        <MDBox pb={2} px={2} textAlign="center" lineHeight={0}>
          <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
            {name}
          </MDTypography>
          {description && (
            <MDTypography variant="caption" color="text" fontWeight="regular">
              {description}
            </MDTypography>
          )}
        </MDBox>
        <MDBox display="flex" justifyContent="center" alignItems="center">
          <MDBox
            variant="gradient"
            bgColor={color}
            color={color === "light" ? "dark" : "white"}
            coloredShadow={color}
            borderRadius="xl"
            display="flex"
            justifyContent="center"
            alignItems="center"
            mx={2}
            mb={1}
            p={0.5}
            width="8rem"
          >
            <MDTypography
              variant="button"
              display="flex"
              fontWeight="regular"
              onClick={handleViewProfileClick}
              style={{ cursor: "pointer" }}
            >
              View Profile
            </MDTypography>
          </MDBox>
        </MDBox>
      </Card>
      <ProfileModal
        open={open}
        handleClose={handleClose}
        name={name}
        position={description}
        img={img}
        email={email}
        address={address}
        ward={ward}
        degree={degree}
        mobile={mobile}
      />
    </>
  );
}
// Setting default values for the props of UserCard
UserCard.defaultProps = {
  color: "info",
  description: "",
};

// Typechecking props for the UserCard
UserCard.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  name: PropTypes.string.isRequired,
  img: PropTypes.string,
  description: PropTypes.string,
};

export default UserCard;
