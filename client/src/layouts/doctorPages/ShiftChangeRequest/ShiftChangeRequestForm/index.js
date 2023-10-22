import React, { useState, useEffect } from "react";
import Axios from "axios";
import { USER_TYPE, USER_EMAIL } from "layouts/authentication/sign-in";

import "./shiftchange.css";
import MDTypography from "components/MDTypography";
import BASE_URL from "config/baseUrl";
import MDButton from "components/MDButton";
import Typography from "@mui/material/Typography";
import PopupModal from "components/PopupModal";

function ShiftChangeForm() {
  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const [shiftsList, setShiftsList] = useState([]);

  const [fromDate, setFromDate] = useState("");
  const [fromShift, setFromShift] = useState("");
  const [toDate, setToDate] = useState("");
  const [toShift, setToShift] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

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
    ? [
        <option key="default" value="" disabled>
          Select a shift
        </option>,
        ...shiftsList.map((shift, index) => (
          <option key={index} value={shift}>
            {shift}
          </option>
        )),
      ]
    : [];

  const handleSubmitButtonClick = () => {
    if (fromDate == "" || toDate == "" || fromShift == "" || toShift == "") {
      setErrorMessage("*Please fill all the fields");
    } else {
      setErrorMessage("");
      setOpenModal(true);
      setFromDate("");
      setToDate("");
      setFromShift("");
      setToShift("");
    }
  };

  return (
    <div className="accountsettings">
      <div className="form">
        <div className="form-group">
          <label htmlFor="name">
            {" "}
            <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
              From Date
            </MDTypography>{" "}
          </label>
          <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="name">
            {" "}
            <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
              From Shift Slot
            </MDTypography>{" "}
          </label>

          <select value={fromShift} onChange={(e) => setFromShift(e.target.value)}>
            {shiftOptions}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="name">
            {" "}
            <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
              To Date
            </MDTypography>{" "}
          </label>
          <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="name">
            {" "}
            <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
              To Shift Slot
            </MDTypography>{" "}
          </label>

          <select value={toShift} onChange={(e) => setToShift(e.target.value)}>
            {shiftOptions}
          </select>
        </div>
      </div>
      {errorMessage && (
        <Typography
          variant="body2"
          color="error"
          style={{ alignSelf: "flex-start", alignSelf: "center", justifySelf: "center" }}
        >
          {errorMessage}
        </Typography>
      )}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <MDButton color="info" onClick={handleSubmitButtonClick}>
          Submit
        </MDButton>
      </div>
      <PopupModal
        open={openModal}
        message="Shift change request sent successfully"
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default ShiftChangeForm;
