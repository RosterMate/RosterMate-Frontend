import React, { useState } from "react";
import Axios from "axios";

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

// base url to connect backend
import BASE_URL from "config/baseUrl";

function LeaveRequestCard({ Status, Name, FromDate, FromShift, ToDate, ToShift, Reason }) {
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
    handleLeaveResponse("Accepted");
  };
  const handleReject = () => {
    setColor("error");
    setTopic("Rejected");
    setIcon(<MailOpen fontSize="large" />);
    handleLeaveResponse("Rejected");
  };

  const handleLeaveResponse = (LStatus) => {
    Axios.post(`${BASE_URL}mainApp/leaveResponse`, {
      status: LStatus,
      name: Name,
      fromDate: FromDate,
      fromShift: FromShift,
      toDate: ToDate,
      toShift: ToShift,
    })
      .then((response) => {
        console.log("getSchedule data:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching getSchedule details:", error);
      });
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

      <MDBox display="raw" p={2} mt={3} mb={3}>
        <MDTypography variant="button" display="flex" color="text">
          <span style={{ fontWeight: "bold" }}> From : </span> {FromDate} {FromShift}
        </MDTypography>
        <MDTypography variant="button" display="flex" color="text">
          <span style={{ fontWeight: "bold" }}> To : </span> {ToDate} {ToShift}
        </MDTypography>
        <MDTypography variant="button" display="flex" color="text">
          <span style={{ fontWeight: "bold" }}> Reason : </span> {Reason}
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
  Status: PropTypes.oneOf(["NoResponse", "Accepted", "Rejected"]).isRequiredisRequired,
  Name: PropTypes.string.isRequired,
  Reason: PropTypes.string.isRequired,
  FromDate: PropTypes.string.isRequired,
  FromShift: PropTypes.string.isRequired,
  ToDate: PropTypes.string.isRequired,
  ToShift: PropTypes.string.isRequired,
};

export default LeaveRequestCard;
