import React, { useState, useEffect } from "react";
import Axios from "axios";
import BASE_URL from "config/baseUrl";
import { USER_TYPE, USER_EMAIL } from "layouts/authentication/sign-in";

// example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "components/Footer";

// components
import Loading from "../../../components/Loading";
import LeaveRequestCard from "../../../components/LeaveRequestCard/LeaveRequestCard";
import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";
import Grid from "@mui/material/Grid";

// css
const data = {
  email: USER_EMAIL,
  type: USER_TYPE,
};
function LeaveRequests() {
  const [isHistoryAvailable, setIsHistoryAvailable] = useState(false);
  const [isLoadingHistory, setIsLoadingHistory] = useState(true);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    Axios.post(`${BASE_URL}mainApp/docLeaveReqHistory`, data)
      .then((response) => {
        if (response.data["historyDetails"].length === 0) {
          setIsHistoryAvailable(false);
        } else {
          setIsHistoryAvailable(true);
          setHistory(response.data["historyDetails"]);
        }
      })
      .catch((error) => {
        console.error("Error fetching ward details:", error);
      });
    setIsLoadingHistory(false);
  }, []);
  return (
    <DashboardLayout>
      <DashboardNavbar />

      <MDTypography variant="h3" display="flex">
        New Leave Request
      </MDTypography>

      {isHistoryAvailable ? (
        <MDTypography variant="h3" display="flex">
          History
        </MDTypography>
      ) : (
        <></>
      )}
      {isLoadingHistory ? (
        <Loading />
      ) : (
        <div>
          <MDBox pt={3} mb={2}>
            <Grid container spacing={3}>
              {history.map((req, id) => (
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
      <Footer />
    </DashboardLayout>
  );
}

export default LeaveRequests;
