import React, { useState } from "react";
import Axios from "axios";

// components and helpers
import Input from "../../../components/InputBox/Input";
import MDButton from "components/MDButton";
import Typography from "@mui/material/Typography";
import PopupModal from "components/PopupModal";

// css
import "./AddingWard.css";

// base url to connect backend
import BASE_URL from "config/baseUrl";

const initialForm = {
  wardname: "",
  wardnumber: "",
  shifts: "",
  maxleaves: "",
  consecutiveshifts: "",
  maxnumberdoctors: "",
};

function AddingWard() {
  const [form, setForm] = useState(initialForm);

  const [errorMessage, setErrorMessage] = useState("");

  const handleFormChange = (event) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };

  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = () => {
    setOpenModal(false);
    //navigate("/addWards");
  };

  const handleSubmitButtonClick = () => {
    if (
      form.wardname === "" ||
      form.wardnumber === "" ||
      form.shifts === "" ||
      form.maxleaves === "" ||
      form.consecutiveshifts === "" ||
      form.maxnumberdoctors === ""
    ) {
      setErrorMessage("*Please enter all the details.");
    } else if (form.consecutiveshifts == "0") {
      setErrorMessage("*Consecutive shifts must be at least 2.");
    } else if (form.maxnumberdoctors < 3) {
      setErrorMessage("*Maximun number doctors must be at least 3.");
    } else {
      setErrorMessage("");

      Axios.post(`${BASE_URL}mainApp/addWard`, form)
        .then((response) => {
          if (response.data.error) {
            setErrorMessage(
              "*" + response.data.error + " already exists. Enter new " + response.data.error
            );
          } else {
            setOpenModal(true);
            setForm(initialForm);
          }
        })
        .catch((error) => {
          console.error("Error adding ward:", error);
        });
    }
  };

  return (
    <div className="wrapper">
      <div className="form_container">
        <form className="form">
          <div className="heading">
            <h1>Add Ward</h1>
          </div>
          <div className="para">
            <h4>Ward Information</h4>
          </div>

          <div className="form_wrap fullname">
            <div
              className="form_item"
              style={{
                marginRight: "5px",
              }}
            >
              <Input
                hName="Ward Name*"
                type="text"
                placeholder="Ward Name"
                id="wardname"
                value={form.wardname}
                onChange={handleFormChange}
              />
            </div>
            <div
              className="form_item"
              style={{
                marginLeft: "5px",
              }}
            >
              <Input
                hName="Ward ID*"
                type="number"
                placeholder="Ward ID ex-: '001'"
                id="wardnumber"
                value={form.wardnumber}
                onChange={handleFormChange}
              />
            </div>
          </div>
          <div className="form_wrap">
            <div className="form_item">
              <p>Number Of Shifts Per Day*</p>
              <select id="shifts" onChange={handleFormChange} value={form.shifts}>
                <option value="" disabled>
                  Number Of Shifts
                </option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </div>
          <div className="form_wrap">
            <div className="form_item">
              <Input
                hName="Maximum Leaves Per Month*"
                type="number"
                placeholder="Maximum Leaves Per Month"
                id="maxleaves"
                value={form.maxleaves}
                onChange={handleFormChange}
              />
            </div>
          </div>

          <div className="form_wrap address">
            <div className="form_item">
              <p>Consecutive Shifts Can Be Done*</p>
              <select
                id="consecutiveshifts"
                onChange={handleFormChange}
                value={form.consecutiveshifts}
              >
                <option value="" disabled>
                  Consecutive Shifts
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </div>

          <div className="form_wrap address">
            <div className="form_item">
              <Input
                hName="Maximum Number of Doctors*"
                type="number"
                placeholder="Maximum Number of Doctors"
                id="maxnumberdoctors"
                value={form.maxnumberdoctors}
                onChange={handleFormChange}
              />
            </div>
          </div>
          {errorMessage && (
            <Typography variant="body2" color="error" style={{ alignSelf: "flex-start" }}>
              {errorMessage}
            </Typography>
          )}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <MDButton color="info" onClick={handleSubmitButtonClick}>
              Submit
            </MDButton>
          </div>
        </form>
      </div>
      <PopupModal open={openModal} message="Ward added successfully" onClose={handleCloseModal} />
    </div>
  );
}

export default AddingWard;
