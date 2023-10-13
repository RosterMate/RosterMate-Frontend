import React, { useState } from "react";
import Axios from "axios";

//components
import Input from "../../../components/InputBox/Input";
import MDButton from "components/MDButton";
import Typography from "@mui/material/Typography";

// css
import "./AddingWard.css";

// base url to connect backend
import BASE_URL from "config/baseUrl";
import PopupModal from "components/PopupModal";

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
          if (response.data.error == "true") {
            setErrorMessage("*Ward ID already exists. Enter new ward ID");
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
                hName="Ward Name"
                type="text"
                placeholder="Ward Name"
                id="wardname"
                value={form.wardname}
                onChange={handleFormChange}
              ></Input>
            </div>
            <div
              className="form_item"
              style={{
                marginLeft: "5px",
              }}
            >
              <Input
                hName="Ward ID"
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
              <Input
                hName="Number of Shifts"
                type="number"
                placeholder="Number of Shifts"
                id="shifts"
                value={form.shifts}
                onChange={handleFormChange}
              ></Input>
            </div>
          </div>
          <div className="form_wrap">
            <div className="form_item">
              <Input
                hName="Maximum Leaves Per month"
                type="number"
                placeholder="Maximum Leaves Per month"
                id="maxleaves"
                value={form.maxleaves}
                onChange={handleFormChange}
              />
            </div>
          </div>

          <div className="form_wrap address">
            <div className="form_item">
              <Input
                hName="Consecutive shifts can be done"
                type="number"
                placeholder="Consecutive shifts can be done"
                id="consecutiveshifts"
                value={form.consecutiveshifts}
                onChange={handleFormChange}
              />
            </div>
          </div>

          <div className="form_wrap address">
            <div className="form_item">
              <Input
                hName="Maximum Number of Doctors"
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
