import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";
import MDBox from "components/MDBox";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

function CreateScheduleForm() {
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
    console.log(form);
    if (
      form.shifts === "" ||
      form.consecutiveShifts === "" ||
      selectedDate === null ||
      form.number1 === "" ||
      form.number2 === "" ||
      form.number3 === ""
    ) {
      setErrorMessage("*Please enter all the details.");
    } else {
      setErrorMessage("correct.");
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
    </div>
  );
}

export default CreateScheduleForm;
