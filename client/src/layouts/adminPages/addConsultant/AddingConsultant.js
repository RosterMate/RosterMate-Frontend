import React, { useState, useEffect } from "react";
import Input from "../../../components/InputBox/Input";
import "./AddingConsultant.css";
import Typography from "@mui/material/Typography";
import MDButton from "components/MDButton";
import Axios from "axios";
import BASE_URL from "config/baseUrl";
import PopupModal from "components/PopupModal";
import { isEmailValid } from "../../../helpers/validators";

const initialForm = {
  fullname: "",
  mobileNo: "",
  position: "",
  email: "",
  password: "",
  address: "",
  wardnumber: "",
  degree: "",
  specialization: "",
};

function AddingConsultant() {
  const [form, setForm] = useState(initialForm);

  const [errorMessage, setErrorMessage] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [emailError, setEmailError] = useState("");

  const [wardNumbers, setWardNumbers] = useState([]);

  useEffect(() => {
    Axios.post(`${BASE_URL}mainApp/sendWardDetails`)
      .then((response) => {
        setWardNumbers(response.data);
        //console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching ward numbers:", error);
      });
  }, []);

  // Render the dropdown list with fetched ward numbers
  const wardNumberOptions = wardNumbers.map((ward) => (
    <option key={ward.id} value={ward.wardNumber}>
      {ward.wardNumber}
    </option>
  ));

  const handleFormChange = (event) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };

  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleSubmitButtonClick = () => {
    if (
      form.fullname === "" ||
      form.position === "" ||
      form.password === "" ||
      form.address === "" ||
      form.wardnumber === ""
    ) {
      setErrorMessage("*Please enter all the details.");
      setEmailError("");
      setMobileError("");
    } else if (!isEmailValid(form.email)) {
      setErrorMessage("*Please enter a valid email.");
      setEmailError("*Please enter a valid email.");
      setMobileError("");
    } else if (form.mobileNo.length !== 10) {
      setErrorMessage("*Enter a valid mobile number.");
      setEmailError("");
      setMobileError("*Enter a valid mobile number.");
    } else {
      setErrorMessage("");
      setMobileError("");
      setEmailError("");

      Axios.post(`${BASE_URL}mainApp/addConsultant`, form)
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
          console.error("Error adding Consultant:", error);
        });
    }
  };

  return (
    <div className="wrapper">
      <div className="form_container">
        <form className="form">
          <div className="heading">
            <h1>Add Consultant</h1>
          </div>
          <div className="para">
            <h4>Personal Information</h4>
          </div>

          <div className="form_wrap address">
            <div className="form_item">
              <Input
                hName="Full Name*"
                type="text"
                placeholder="Full Name"
                id="fullname"
                value={form.fullname}
                onChange={handleFormChange}
              />
            </div>
            <div className="form_item">
              <Input
                hName="Mobile No*"
                type="number"
                placeholder="Mobile No."
                id="mobileNo"
                value={form.mobileNo}
                onChange={handleFormChange}
              />
              {mobileError && (
                <Typography variant="body2" color="error" style={{ alignSelf: "flex-start" }}>
                  {mobileError}
                </Typography>
              )}
            </div>
          </div>
          <div className="form_wrap">
            <div className="form_item">
              <Input
                hName="Position*"
                type="text"
                placeholder="Position"
                id="position"
                value={form.position}
                onChange={handleFormChange}
              />
            </div>
          </div>
          <div className="form_wrap">
            <div className="form_item">
              <Input
                hName="Email*"
                type="email"
                placeholder="Email"
                id="email"
                value={form.email}
                onChange={handleFormChange}
              />
              {emailError && (
                <Typography variant="body2" color="error" style={{ alignSelf: "flex-start" }}>
                  {emailError}
                </Typography>
              )}
            </div>
          </div>

          <div className="form_wrap">
            <div className="form_item">
              <Input
                hName="Password*"
                type="Password"
                placeholder="Password"
                id="password"
                onChange={handleFormChange}
              />
            </div>
          </div>

          <div className="form_wrap address">
            <div className="form_item">
              <Input
                hName="Address*"
                type="text"
                placeholder="Address"
                id="address"
                onChange={handleFormChange}
              />
            </div>
          </div>
          <div className="form_wrap address">
            <div className="form_item">
              <p>Ward ID*</p>
              <select id="wardnumber" onChange={handleFormChange} value={form.wardnumber}>
                <option value="" disabled>
                  Ward ID
                </option>
                {wardNumberOptions}
              </select>
            </div>
          </div>
          <div className="para">
            <h4>Academic Information</h4>
          </div>
          <div className="form_wrap address">
            <div className="form_item">
              <Input
                hName="Degree"
                type="text"
                placeholder="Degree"
                id="degree"
                value={form.degree}
                onChange={handleFormChange}
              />
            </div>
          </div>
          <div className="form_wrap address">
            <div className="form_item">
              <Input
                hName="Specialization"
                type="text"
                placeholder="Specialization"
                id="specialization"
                value={form.specialization}
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
      <PopupModal
        open={openModal}
        message="Consultant added successfully"
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default AddingConsultant;
