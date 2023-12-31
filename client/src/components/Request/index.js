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

function Notification({
  isReceived,
  status,
  fromOrTo,
  FromDate,
  FromShift,
  FromTime,
  ToDate,
  ToShift,
  ToTime,
}) {
  const [color, setColor] = useState(
    status === "NoResponse" ? "info" : status === "Accepted" ? "success" : "error"
  );
  const [topic, setTopic] = useState(status === "NoResponse" ? "No Response" : status);

  const [icon, setIcon] = useState(
    status === "NoResponse" ? <Mail fontSize="large" /> : <MailOpen fontSize="large" />
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
            {fromOrTo}
          </MDTypography>
        </MDBox>
      </MDBox>

      <MDTypography variant="button" display="flex" color="text" fontWeight="bold" mt={1} px={2}>
        Shift change From :-
      </MDTypography>
      <MDBox display="raw" pl={6}>
        <MDTypography variant="button" display="flex" color="text">
          Date : {FromDate}
        </MDTypography>
        <MDTypography variant="button" display="flex" color="text">
          Shift : {FromShift}
        </MDTypography>
        <MDTypography variant="button" display="flex" color="text">
          Time : {FromTime}
        </MDTypography>
      </MDBox>

      <MDTypography variant="button" display="flex" color="text" fontWeight="bold" px={2}>
        Shift change To :-
      </MDTypography>
      <MDBox display="raw" pb={1} pl={6}>
        <MDTypography variant="button" display="flex" color="text">
          Date : {ToDate}
        </MDTypography>
        <MDTypography variant="button" display="flex" color="text">
          Shift : {ToShift}
        </MDTypography>
        <MDTypography variant="button" display="flex" color="text">
          Time : {ToTime}
        </MDTypography>
      </MDBox>
      {topic === "No Response" && isReceived ? (
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
Notification.propTypes = {
  isReceived: PropTypes.bool,
  status: PropTypes.oneOf(["NoResponse", "Accepted", "Rejected"]).isRequiredisRequired,
  fromOrTo: PropTypes.string.isRequired,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  FromDate: PropTypes.string.isRequired,
  FromShift: PropTypes.string.isRequired,
  FromTime: PropTypes.string.isRequired,
  ToDate: PropTypes.string.isRequired,
  ToShift: PropTypes.string.isRequired,
  ToTime: PropTypes.string.isRequired,
};

export default Notification;
