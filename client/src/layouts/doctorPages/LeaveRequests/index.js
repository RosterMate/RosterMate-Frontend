import React, { useState, useEffect } from "react";
import Axios from "axios";
import BASE_URL from "config/baseUrl";
import { USER_TYPE, USER_EMAIL } from "layouts/authentication/sign-in";

// components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "components/Footer";
import LeaveRequestCard from "../../../components/LeaveRequestCard/LeaveRequestCard";
import Typography from "@mui/material/Typography";
import MDTypography from "components/MDTypography";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MDBox from "components/MDBox";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import MDButton from "components/MDButton";
import PopupModal from "components/PopupModal";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function LeaveRequests() {
  const [shiftsList, setShiftsList] = useState([]);

  useEffect(() => {
    Axios.post(`${BASE_URL}mainApp/getShiftOptions`, { email: USER_EMAIL, type: USER_TYPE })
      .then((response1) => {
        setShiftsList(response1.data["shifts"]);
        //console.log("shiftsList : ", response1.data);
      })
      .catch((error) => {
        console.error("Error fetching shift names:", error);
      });
  }, []);
  const shiftOptions = shiftsList
    ? shiftsList.map((shift, index) => (
        <MenuItem key={index} value={shift}>
          {shift}
        </MenuItem>
      ))
    : [];

  const [isHistoryAvailable, setIsHistoryAvailable] = useState(false);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const data = {
      email: USER_EMAIL,
      type: USER_TYPE,
    };
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
  const [fromShift, setFromShift] = useState("");
  const [toDate, setToDate] = useState("");
  const [toShift, setToShift] = useState("");
  const [reason, setReason] = useState("");

  const [errorMsg, setErrorMsg] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const currentDate = new Date();
    const sFromDate = new Date(fromDate);

    if (fromDate === "" || toDate === "" || reason === "" || fromShift === "" || toShift === "") {
      setErrorMsg("*Please fill all the fields");
    } else if (fromDate > toDate) {
      setErrorMsg("*From date should be before the to date");
    } else if (sFromDate < currentDate) {
      setErrorMsg("*From date should be in the future");
    } else {
      setErrorMsg("");

      const data2 = {
        email: USER_EMAIL,
        type: USER_TYPE,
        fromDate: fromDate,
        fromShift: fromShift,
        toDate: toDate,
        toShift: toShift,
        reason: reason,
      };

      Axios.post(`${BASE_URL}mainApp/docLeaveReq`, data2)
        .then((response) => {
          if (response.data["status"] === "success") {
            console.log("message:", response.data["message"]);
            setOpenModal(true);
            setFromDate("");
            setFromShift("");
            setToDate("");
            setToShift("");
            setReason("");
          } else {
            console.log("message:", response.data["message"]);
            setErrorMsg("*Error in sending request. Please try again.");
          }
        })
        .catch((error) => {
          console.error("Error fetching view_profile details:", error);
        });
    }
  };

  const handleFromShiftChange = (event) => {
    setFromShift(event.target.value);
  };
  const handleToShiftChange = (event) => {
    setToShift(event.target.value);
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
        <form onSubmit={handleSubmit} style={{ padding: "10px" }}>
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

          <FormControl
            style={{ marginLeft: "1%", width: "98%", marginTop: "5px", marginBottom: "5px" }}
          >
            <InputLabel>From Shift</InputLabel>
            <Select value={fromShift} onChange={handleFromShiftChange} style={{ height: "42px" }}>
              {shiftOptions}
            </Select>
          </FormControl>

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

          <FormControl
            style={{ marginLeft: "1%", width: "98%", marginTop: "5px", marginBottom: "5px" }}
          >
            <InputLabel>To Shift</InputLabel>
            <Select value={toShift} onChange={handleToShiftChange} style={{ height: "42px" }}>
              {shiftOptions}
            </Select>
          </FormControl>

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
          {errorMsg && (
            <Typography variant="body2" color="error" style={{ alignSelf: "flex-start" }}>
              {errorMsg}
            </Typography>
          )}
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
                        FromDate={req.FromDate}
                        FromShift={req.FromShift}
                        ToDate={req.ToDate}
                        ToShift={req.ToShift}
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
      <PopupModal
        open={openModal}
        message="Leave request sent successfully"
        onClose={handleCloseModal}
      />

      <Footer />
    </DashboardLayout>
  );
}

export default LeaveRequests;
