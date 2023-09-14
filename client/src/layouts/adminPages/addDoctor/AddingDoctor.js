import React, { useState } from "react";
import Input from "../../../components/InputBox/Input";
import Button from "../../../components/Button/Button";
import "./AddingDoctor.css";
import MDButton from "components/MDButton";

function AddingDoctor() {
  const [form, setForm] = useState({
    fullname: "",
    mobileNo: "",
    email: "",
    password: "",
    address: "",
    university: "",
    degree: "",
    degreeperiod: "",
    specialization: "",
  });

  const handleFormChange = (event) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmitButtonClick = () => {
    console.log(form);
  };

  return (
    <div className="wrapper">
      <div className="form_container">
        <form className="form">
          <div className="heading">
            <h1>Add Doctor</h1>
          </div>
          <div className="para">
            <h4>Personal Information</h4>
          </div>

          <div className="form_wrap fullname">
            <div className="form_item">
              <Input
                hName="Full Name"
                type="text"
                placeholder="Full Name"
                id="fullName"
                onChange={handleFormChange}
              ></Input>
            </div>
            <div className="form_item">
              <Input
                hName="Mobile No."
                type="text"
                placeholder="Mobile No."
                id="mobileNo"
                onChange={handleFormChange}
              ></Input>
            </div>
          </div>
          <div className="form_wrap">
            <div className="form_item">
              <Input
                hName="Email"
                type="email"
                placeholder="Email"
                id="email"
                onChange={handleFormChange}
              ></Input>
            </div>
          </div>
          <div className="form_wrap">
            <div className="form_item">
              <Input
                hName="Password"
                type="Password"
                placeholder="Password"
                id="password"
                onChange={handleFormChange}
              ></Input>
            </div>
          </div>

          <div className="form_wrap address">
            <div className="form_item">
              <Input
                hName="Address"
                type="text"
                placeholder="Address"
                id="address"
                onChange={handleFormChange}
              ></Input>
            </div>
          </div>
          <div className="para">
            <h4>Academic Information</h4>
          </div>
          <div className="form_wrap fullname">
            <div className="form_item">
              <Input
                hName="University Name"
                type="text"
                placeholder="University Name"
                id="university"
                onChange={handleFormChange}
              ></Input>
            </div>
            <div className="form_item">
              <Input
                hName="Degree"
                type="text"
                placeholder="Degree"
                id="degree"
                onChange={handleFormChange}
              ></Input>
            </div>
          </div>
          <div className="form_wrap">
            <div className="form_item">
              <Input
                hName="Degree Period"
                type="text"
                placeholder="Degree Period"
                id="degreeperiod"
                onChange={handleFormChange}
              ></Input>
            </div>
          </div>
          <div className="form_wrap">
            <div className="form_item">
              <Input
                hName="Specialization"
                type="text"
                placeholder="Specialization"
                id="specialization"
                onChange={handleFormChange}
              ></Input>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <MDButton color="info" onClick={handleSubmitButtonClick}>
              Submit
            </MDButton>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddingDoctor;
