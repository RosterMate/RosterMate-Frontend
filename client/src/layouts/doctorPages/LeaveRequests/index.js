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
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import MDButton from "components/MDButton";

const data = {
  email: USER_EMAIL,
  type: USER_TYPE,
};
function LeaveRequests() {
  const [isHistoryAvailable, setIsHistoryAvailable] = useState(false);
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
  }, []);

  // Define state for form inputs
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [reason, setReason] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted: ", { fromDate, toDate, reason });
    setReason("");
    setFromDate("");
    setToDate("");
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />

      <MDTypography variant="h3" display="flex">
        New Leave Request
      </MDTypography>

      <Card
        style={{
          width: window.innerWidth <= 800 ? "100%" : "50%",
          margin: "0 auto",
          padding: "20px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <form onSubmit={handleSubmit} style={{ padding: "20px" }}>
          <div style={{ padding: "5px" }}>
            <TextField
              label="From date"
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
          </div>
          <div style={{ padding: "5px" }}>
            <TextField
              label="To date"
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
          </div>
          <div style={{ padding: "5px" }}>
            <TextField
              label="Reason"
              multiline
              rows={4}
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              fullWidth
            />
          </div>
          <div style={{ margin: "auto", textAlign: "center" }}>
            <MDButton variant="gradient" color="info" onClick={handleSubmit}>
              Accept
            </MDButton>
          </div>
        </form>
      </Card>

      {isHistoryAvailable ? (
        <>
          <MDTypography variant="h3" display="flex">
            History
          </MDTypography>

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
        </>
      ) : (
        <></>
      )}
      <Footer />
    </DashboardLayout>
  );
}

export default LeaveRequests;
