import React, { useState } from "react";
import Axios from "axios";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";
import MDBox from "components/MDBox";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import PopupModal from "components/PopupModal";
import BASE_URL from "config/baseUrl";
import { USER_EMAIL, USER_TYPE } from "layouts/authentication/sign-in";

function CreateScheduleForm({ numDoc }) {
  const [openModal, setOpenModal] = useState(false);
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const [popupMsg, setPopupMsg] = useState("Creating Schedule...");

  const [selectedDate, setSelectedDate] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const [form, setForm] = useState({
    shifts: "",
    consecutiveShifts: "",
    number1: "",
    number2: "",
    number3: "",
  });

  const handleFormChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const handleFormChange2 = (event) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmitButtonClick = () => {
    if (
      form.shifts === "" ||
      form.consecutiveShifts === "" ||
      selectedDate === null ||
      form.number1 === "" ||
      form.number3 === ""
    ) {
      setErrorMessage("*Please enter all the details.");
    } else if (form.shifts === "3" && form.number2 === "") {
      setErrorMessage("*Please enter all the details.");
    } else if (form.number1 > numDoc || form.number2 > numDoc || form.number3 > numDoc) {
      setErrorMessage("*Number of doctors cannot be more than the total number of doctors.");
    } else if (form.number1 < 0 || form.number2 < 0 || form.number3 < 0) {
      setErrorMessage("*Number of doctors cannot be negative.");
    } else {
      //console.log("form:", form.number1, numDoc);
      setPopupMsg("Creating Schedule...");
      setOpenModal(true);

      // Send constraints to backend to create schedule
      Axios.post(`${BASE_URL}mainApp/createSchedule`, {
        form,
        month: selectedDate,
        type: USER_TYPE,
        email: USER_EMAIL,
      })
        .then((response) => {
          if (response.data["status"] === "error") {
            console.log(response.data["message"]);
          } else {
            //console.log("doctorDetails data:", response.data);
            setPopupMsg("Schedule created successfully!");
            setErrorMessage("");
          }
        })
        .catch((error) => {
          console.error("Error fetching doctor details:", error);
          setOpenModal(true);
          setPopupMsg("Server error. Please try again.");
        });

      setForm({
        shifts: "",
        consecutiveShifts: "",
        number1: "",
        number2: "",
        number3: "",
      });
      setSelectedDate(null);
    }
  };

  return (
    <div className="app">
      <MDBox mt={2} mb={2}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} xl={4}>
            <label>Shifts Per Day</label>
            <div style={{ width: "100%" }}>
              <select
                id="shifts"
                onChange={handleFormChange2}
                value={form.shifts}
                style={{
                  width: "100%",
                  height: "2rem",
                  padding: "0.25rem",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  fontSize: "1rem",
                }}
              >
                <option value="" disabled>
                  Number Of Shifts
                </option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </Grid>

          <Grid item xs={12} md={6} xl={4}>
            <label>Maximum Consecutive Shifts</label>
            <div style={{ width: "100%" }}>
              <select
                id="consecutiveShifts"
                onChange={handleFormChange2}
                value={form.consecutiveShifts}
                style={{
                  width: "100%",
                  height: "2rem",
                  padding: "0.25rem",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  fontSize: "1rem",
                }}
              >
                <option value="" disabled>
                  Consecutive Shifts
                </option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </Grid>

          <Grid item xs={12} md={6} xl={4}>
            <label>Month</label>
            <div style={{ width: "100%" }}>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                showMonthYearPicker
                dateFormat="MM/yyyy"
              />
            </div>
          </Grid>

          <Grid item xs={12} md={6} xl={4}>
            <MDTypography variant="h5" display="flex">
              Morning
            </MDTypography>
            <form>
              <label> Number of doctors </label>
              <input
                type="number"
                name="number1"
                value={form.number1}
                placeholder="Number of doctors"
                onChange={handleFormChange}
              />
            </form>
          </Grid>
          {form.shifts === "3" ? (
            <Grid item xs={12} md={6} xl={4}>
              <MDTypography variant="h5" display="flex">
                Evening
              </MDTypography>
              <form>
                <label> Number of doctors </label>
                <input
                  type="number"
                  name="number2"
                  value={form.number2}
                  placeholder="Number of doctors"
                  onChange={handleFormChange}
                />
              </form>
              <Divider orientation="vertical" sx={{ mx: 0 }} />
            </Grid>
          ) : (
            <></>
          )}
          <Grid item xs={12} md={6} xl={4}>
            <MDTypography variant="h5" display="flex">
              Night
            </MDTypography>
            <form>
              <label> Number of doctors </label>
              <input
                type="number"
                name="number3"
                value={form.number3}
                placeholder="Number of doctors"
                onChange={handleFormChange}
              />
            </form>
          </Grid>
        </Grid>
      </MDBox>
      {errorMessage && (
        <Typography variant="body2" color="error" style={{ alignSelf: "flex-start" }}>
          {errorMessage}
        </Typography>
      )}

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <MDButton color="info" onClick={handleSubmitButtonClick}>
          Create Schedule
        </MDButton>
      </div>
      <PopupModal open={openModal} message={popupMsg} onClose={handleCloseModal} />
    </div>
  );
}

// Setting default values for the props of UserCard
CreateScheduleForm.defaultProps = {
  numDoc: 0,
};

// Typechecking props for the UserCard
CreateScheduleForm.propTypes = {
  numDoc: PropTypes.number,
};

export default CreateScheduleForm;
