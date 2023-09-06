import React, { useState } from "react";
import Input from "../../../components/InputBox/Input";
import Button from "../../../components/Button/Button";
import "./AddingDoctor.css";

function AddingDoctor() {
  const [fullname, setFullName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [university, setUniversity] = useState("");
  const [degree, setDegree] = useState("");
  const [degreeperiod, setDegreePeriod] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [showNextComponent, setShowNextComponent] = useState(false);

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };
  const handleMobileNoChange = (event) => {
    setMobileNo(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };
  const handleUniversityChange = (event) => {
    setUniversity(event.target.value);
  };
  const handleDegreeChange = (event) => {
    setDegree(event.target.value);
  };
  const handleDegreePeriodChange = (event) => {
    setDegreePeriod(event.target.value);
  };
  const handleSpecializationChange = (event) => {
    setSpecialization(event.target.value);
  };
  const handleNextButtonClick = () => {
    setShowNextComponent(!showNextComponent);
  };
  return (
    <div>
      {showNextComponent ? (
        <div class="wrapper">
          <div class="form_container">
            <form name="form">
              <div class="heading">
                <h1>Add Doctor</h1>
              </div>
              <div className="para">
                <h4>Academic Information</h4>
              </div>

              <div class="form_wrap fullname">
                <div class="form_item">
                  <Input
                    hName="University Name"
                    type="University Name"
                    className=""
                    placeholder="University Name"
                    id="university"
                    autoComplete=""
                    required
                    value={university}
                    onChange={handleUniversityChange}
                  ></Input>
                </div>
                <div class="form_item">
                  <Input
                    hName="Degree"
                    type="Degree"
                    className=""
                    placeholder="Degree"
                    id="degree"
                    autoComplete=""
                    required
                    value={degree}
                    onChange={handleDegreeChange}
                  ></Input>
                </div>
              </div>
              <div class="form_wrap">
                <div class="form_item">
                  <Input
                    hName="Degree Period"
                    type="Degree Period"
                    className=""
                    placeholder="Degree Period"
                    id="degreeperiod"
                    autoComplete=""
                    required
                    value={degreeperiod}
                    onChange={handleDegreePeriodChange}
                  ></Input>
                </div>
              </div>
              <div class="form_wrap">
                <div class="form_item">
                  <Input
                    hName="Specialization"
                    type="Specialization"
                    className=""
                    placeholder="Specialization"
                    id="specialization"
                    autoComplete=""
                    required
                    value={specialization}
                    onChange={handleSpecializationChange}
                  ></Input>
                </div>
              </div>
              <div class="btn">
                <Button
                  className=""
                  type="button"
                  fullWidth
                  variant="contained"
                  onClick={handleNextButtonClick}
                  showMessage="Back"
                ></Button>
              </div>
              <div class="btn">
                <Button
                  className=""
                  type="submit"
                  fullWidth
                  variant="contained"
                  onClick=""
                  showMessage="Submit"
                ></Button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div class="wrapper">
          <div class="form_container">
            <form name="form">
              <div class="heading">
                <h1>Add Doctor</h1>
              </div>
              <div className="para">
                <h4>Personal Information</h4>
              </div>

              <div class="form_wrap fullname">
                <div class="form_item">
                  <Input
                    hName="Full Name"
                    type="Full Name"
                    className=""
                    placeholder="Full Name"
                    id="fullName"
                    autoComplete=""
                    required
                    value={fullname}
                    onChange={handleFullNameChange}
                  ></Input>
                </div>
                <div class="form_item">
                  <Input
                    hName="Mobile No."
                    type="Mobile No."
                    className=""
                    placeholder="Mobile No."
                    id="mobileNo"
                    autoComplete=""
                    required
                    value={mobileNo}
                    onChange={handleMobileNoChange}
                  ></Input>
                </div>
              </div>
              <div class="form_wrap">
                <div class="form_item">
                  <Input
                    hName="Email"
                    type="Email"
                    className=""
                    placeholder="Email"
                    id="email"
                    autoComplete=""
                    required
                    value={email}
                    onChange={handleEmailChange}
                  ></Input>
                </div>
              </div>
              <div class="form_wrap">
                <div class="form_item">
                  <Input
                    hName="Password"
                    type="Password"
                    className=""
                    placeholder="Password"
                    id="password"
                    autoComplete=""
                    required
                    value={password}
                    onChange={handlePasswordChange}
                  ></Input>
                </div>
              </div>

              <div class="form_wrap">
                <div class="form_item">
                  <Input
                    hName="Address"
                    type="Address"
                    className=""
                    placeholder="Address"
                    id="address"
                    autoComplete=""
                    required
                    value={address}
                    onChange={handleAddressChange}
                  ></Input>
                </div>
              </div>

              <div class="btn">
                <Button
                  className=""
                  type="button"
                  fullWidth
                  variant="contained"
                  onClick={handleNextButtonClick}
                  showMessage="Next"
                ></Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddingDoctor;
