import React, { useState, useEffect } from "react";
import Axios from "axios";
import BASE_URL from "config/baseUrl";
import MDBox from "components/MDBox";
import Grid from "@mui/material/Grid";
import LeaveRequestCard from "../../../components/LeaveRequestCard/LeaveRequestCard";
import Loading from "../../../components/Loading";
import "./GrantLeaveRequests.css";
import { USER_TYPE, USER_EMAIL } from "layouts/authentication/sign-in";

// MUI components
import MDTypography from "components/MDTypography";

function GrantLeaveRequests() {
  const [leaveRequestsDetails, setleaveRequestsDetails] = useState([]);
  const [isLoadingLeaveReqDetails, setisLoadingLeaveReqDetails] = useState(true);

  const [HistoryDetails, setHistoryDetails] = useState([]);
  const [isLoadingHistoryDetails, setIsLoadingHistoryDetails] = useState(true);

  const data = {
    email: USER_EMAIL,
    type: USER_TYPE,
  };

  useEffect(() => {
    Axios.post(`${BASE_URL}mainApp/leaveReqDetails`, data)
      .then((response) => {
        setleaveRequestsDetails(response.data["reqDetails"]);
        setHistoryDetails(response.data["historyDetails"]);
        setisLoadingLeaveReqDetails(false);
        setIsLoadingHistoryDetails(false);
      })
      .catch((error) => {
        console.error("Error fetching ward details:", error);
        setisLoadingLeaveReqDetails(false);
      });
  }, []);

  return (
    <>
      <MDTypography variant="h3" display="flex">
        Leave Requests
      </MDTypography>
      {isLoadingLeaveReqDetails ? (
        <Loading />
      ) : (
        <div className="">
          <MDBox pt={3} mb={2}>
            <Grid container spacing={3}>
              {leaveRequestsDetails.map((req, id) => (
                <Grid item xs={12} md={6} lg={3} key={id}>
                  <MDBox mt={3}>
                    <LeaveRequestCard
                      Status={req.Status}
                      Name={req.Name}
                      Date={req.Date}
                      FromTime={req.FromTime}
                      ToTime={req.ToTime}
                      Reason={req.Reason}
                    />
                  </MDBox>
                </Grid>
              ))}
            </Grid>
          </MDBox>
        </div>
      )}
      <MDTypography variant="h3" display="flex">
        History
      </MDTypography>
      {isLoadingHistoryDetails ? (
        <Loading />
      ) : (
        <div className="">
          <MDBox pt={3} mb={2}>
            <Grid container spacing={3}>
              {HistoryDetails.map((req, id) => (
                <Grid item xs={12} md={6} lg={3} key={id}>
                  <MDBox mt={3}>
                    <LeaveRequestCard
                      Status={req.Status}
                      Name={req.Name}
                      Date={req.Date}
                      FromTime={req.FromTime}
                      ToTime={req.ToTime}
                      Reason={req.Reason}
                    />
                  </MDBox>
                </Grid>
              ))}
            </Grid>
          </MDBox>
        </div>
      )}
    </>
  );
}

export default GrantLeaveRequests;
