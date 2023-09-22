import React, { useState, useEffect } from "react";
import Axios from "axios";
import BASE_URL from "config/baseUrl";
import MDBox from "components/MDBox";
import Grid from "@mui/material/Grid";
import LeaveRequestCard from "../../../components/LeaveRequestCard/LeaveRequestCard";
import Loading from "../../../components/Loading";
import "./GrantLeaveRequests.css";

function GrantLeaveRequests() {
  const [leaveRequestsDetails, setleaveRequestsDetails] = useState([]);
  const [isLoadingLeaveReqDetails, setisLoadingLeaveReqDetails] = useState(true);

  useEffect(() => {
    Axios.post(`${BASE_URL}mainApp/leaveReqDetails`, {})
      .then((response) => {
        setleaveRequestsDetails(response.data);
        setisLoadingLeaveReqDetails(false);
      })
      .catch((error) => {
        console.error("Error fetching ward details:", error);
        setisLoadingLeaveReqDetails(false); // Handle the error and set isLoadingLeaveReqDetails to false
      });
  }, []); // Empty dependency array to run the effect only once

  return (
    <>
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
    </>
  );
}

export default GrantLeaveRequests;
