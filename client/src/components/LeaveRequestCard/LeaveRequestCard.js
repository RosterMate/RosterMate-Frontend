import React, { useState } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Mail from "@mui/icons-material/LocalPostOffice";
import MailOpen from "@mui/icons-material/Drafts";

// components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";

function LeaveRequestCard({ Status, Name, Date, FromTime, ToTime, Reason }) {
  const [color, setColor] = useState(
    Status === "NoResponse" ? "info" : Status === "Accepted" ? "success" : "error"
  );
  const [topic, setTopic] = useState(Status === "NoResponse" ? "No Response" : Status);

  const [icon, setIcon] = useState(
    Status === "NoResponse" ? <Mail fontSize="large" /> : <MailOpen fontSize="large" />
  );

  const handleAccept = () => {
    setColor("success");
    setTopic("Accepted");
    setIcon(<MailOpen fontSize="large" />);
  };
  const handleReject = () => {
    setColor("error");
    setTopic("Rejected");
    setIcon(<MailOpen fontSize="large" />);
  };

  return (
    <Card>
      <MDBox display="flex" justifyContent="space-between" pt={1} px={2}>
        <MDBox
          variant="gradient"
          bgColor={color}
          coloredShadow={color}
          borderRadius="xl"
          display="raw"
          width="100%"
          p={2}
          mt={-3}
        >
          <MDBox display="flex" color={color === "light" ? "dark" : "white"}>
            {icon}
            <MDTypography variant="body2" color="white" fontWeight="bold" ml={2} mr={1}>
              {topic}
            </MDTypography>
          </MDBox>
          <MDTypography variant="body2" color="white" fontWeight="bold">
            {Name}
          </MDTypography>
        </MDBox>
      </MDBox>

      <MDBox display="raw" pl={6} mt={3} mb={3}>
        <MDTypography variant="button" display="flex" color="text">
          Date : {Date}
        </MDTypography>
        <MDTypography variant="button" display="flex" color="text">
          From : {FromTime}
        </MDTypography>
        <MDTypography variant="button" display="flex" color="text">
          To : {ToTime}
        </MDTypography>
      </MDBox>

      {topic === "No Response" ? (
        <MDBox display="flex" justifyContent="center" alignItems="center">
          <MDBox
            variant="gradient"
            borderRadius="xl"
            display="flex"
            justifyContent="center"
            alignItems="center"
            mx={1}
            mb={1}
          >
            <MDButton variant="gradient" color={color} onClick={handleAccept}>
              Accept
            </MDButton>
          </MDBox>
          <MDBox
            variant="gradient"
            borderRadius="xl"
            display="flex"
            justifyContent="center"
            alignItems="center"
            mx={1}
            mb={1}
          >
            <MDButton variant="gradient" color={color} onClick={handleReject}>
              Reject
            </MDButton>
          </MDBox>
        </MDBox>
      ) : null}
    </Card>
  );
}

// Typechecking props for the WardCard
LeaveRequestCard.propTypes = {
  isReceived: PropTypes.bool,
  Status: PropTypes.oneOf(["NoResponse", "Accepted", "Rejected"]).isRequiredisRequired,
  Name: PropTypes.string.isRequired,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  Date: PropTypes.string.isRequired,
  FromTime: PropTypes.string.isRequired,
  ToTime: PropTypes.string.isRequired,
  Reason: PropTypes.string.isRequired,
};

export default LeaveRequestCard;
