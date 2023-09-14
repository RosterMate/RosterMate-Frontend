import React, { useState, useEffect } from "react";

import "./shiftchange.css";
import MDTypography from "components/MDTypography";

const initialValues = {
  fromDate: new Date(),
  toDate: new Date(),
  fromShiftSlot: "",
  toShiftSlot: "",
  Reason: "",
  Status: "",
};

function ShiftChangeForm() {
  const [date, setDate] = useState(new Date());
  const [fromShift, setFromShift] = useState();
  const [toShift, setToShift] = useState();
  const [selects2, setSelects2] = useState();
  const [selects3, setSelects3] = useState();

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
          <input type="date" onChange={(e) => e.target.value} />
        </div>

        <div className="form-group">
          <label htmlFor="name">
            {" "}
            <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
              To Date
            </MDTypography>{" "}
          </label>
          <input type="date" onChange={(e) => e.target.value} />
        </div>

        <div className="form-group">
          <label htmlFor="name">
            {" "}
            <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
              From Shift Slot
            </MDTypography>{" "}
          </label>

          <select value={fromShift} onChange={(e) => setFromShift(e.target.value)}>
            <option value="1">Morning (08.00-13.00) </option>
            <option value="2">Evening (13.00-17.00)</option>
            <option value="3">Night (17.00-08.00)</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="name">
            {" "}
            <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
              To Shift Slot
            </MDTypography>{" "}
          </label>

          <select value={toShift} onChange={(e) => setToShift(e.target.value)}>
            <option value="1">Morning (08.00-13.00) </option>
            <option value="2">Evening (13.00-17.00)</option>
            <option value="3">Night (17.00-08.00)</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="name">
            {" "}
            <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
              From Doctor
            </MDTypography>{" "}
          </label>

          <select value={selects2} onChange={(e) => setSelects2(e.target.value)}>
            <option value="1">Doctor 1</option>
            <option value="2">Doctor 2</option>
            <option value="3">Doctor 3</option>
            <option value="4">Doctor 4</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="name">
            {" "}
            <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
              Submit the form here
            </MDTypography>{" "}
          </label>
          <button className="mainbutton1">
            <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
              Save Changes
            </MDTypography>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShiftChangeForm;
