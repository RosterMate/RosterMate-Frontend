import React, { useState } from "react";
import Input from "../../../components/InputBox/Input";
import Button from "../../../components/Button/Button";
import "./AddingConsultant.css";

function AddingConsultant() {
  const [form1, setForm1] = useState({
    fullname: "",
    mobileNo: "",
    email: "",
    password: "",
    address: "",
    wardno: "",
  });

  const [form2, setForm2] = useState({
    university: "",
    degree: "",
    degreeperiod: "",
    specialization: "",
  });

  const [showForm2, setShowForm2] = useState(false);

  const handleForm1Change = (event) => {
    setForm1({
      ...form1,
      [event.target.id]: event.target.value,
    });
  };

  const handleForm2Change = (event2) => {
    setForm2({
      ...form2,
      [event2.target.id]: event2.target.value,
    });
  };

  const handleNextButtonClick = () => {
    setShowForm2(true);
    console.log(form1);
  };
  const handleBackButtonClick = () => {
    setShowForm2(false);
    console.log(form2);
    console.log(form1);
  };

  return (
    <div>
      {showForm2 ? (
        <div class="wrapper">
          <div class="form_container">
            <form name="form">
              <div class="heading">
                <h1>Add Consultant</h1>
              </div>
              <div className="para">
                <h4>Academic Information</h4>
              </div>

              <div class="form_wrap fullname">
                <div class="form_item">
                  <Input
                    hName="University Name"
                    type="text"
                    placeholder="University Name"
                    id="university"
                    onChange={handleForm2Change}
                  ></Input>
                </div>
                <div class="form_item">
                  <Input
                    hName="Degree"
                    type="text"
                    placeholder="Degree"
                    id="degree"
                    onChange={handleForm2Change}
                  ></Input>
                </div>
              </div>
              <div class="form_wrap">
                <div class="form_item">
                  <Input
                    hName="Degree Period"
                    type="text"
                    placeholder="Degree Period"
                    id="degreeperiod"
                    onChange={handleForm2Change}
                  ></Input>
                </div>
              </div>
              <div class="form_wrap">
                <div class="form_item">
                  <Input
                    hName="Specialization"
                    type="text"
                    placeholder="Specialization"
                    id="specialization"
                    onChange={handleForm2Change}
                  ></Input>
                </div>
              </div>
              <div class="btn">
                <Button
                  type="button"
                  variant="contained"
                  onClick={handleBackButtonClick}
                  showMessage="Back"
                ></Button>
              </div>
              <div class="btn">
                <Button
                  type="submit"
                  variant="contained"
                  onClick={handleBackButtonClick}
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
                <h1>Add Consultant</h1>
              </div>
              <div className="para">
                <h4>Personal Information</h4>
              </div>

              <div class="form_wrap fullname">
                <div class="form_item">
                  <Input
                    hName="Full Name"
                    type="text"
                    placeholder="Full Name"
                    id="fullName"
                    onChange={handleForm1Change}
                  ></Input>
                </div>
                <div class="form_item">
                  <Input
                    hName="Mobile No."
                    type="text"
                    placeholder="Mobile No."
                    id="mobileNo"
                    onChange={handleForm1Change}
                  ></Input>
                </div>
              </div>
              <div class="form_wrap">
                <div class="form_item">
                  <Input
                    hName="Email"
                    type="email"
                    placeholder="Email"
                    id="email"
                    onChange={handleForm1Change}
                  ></Input>
                </div>
              </div>
              <div class="form_wrap">
                <div class="form_item">
                  <Input
                    hName="Password"
                    type="Password"
                    placeholder="Password"
                    id="password"
                    onChange={handleForm1Change}
                  ></Input>
                </div>
              </div>

              <div class="form_wrap address">
                <div class="form_item">
                  <Input
                    hName="Address"
                    type="text"
                    placeholder="Address"
                    id="address"
                    onChange={handleForm1Change}
                  ></Input>
                </div>
              </div>
              <div class="form_wrap">
                <div class="form_item">
                  <Input
                    hName="Ward No."
                    type="Ward No."
                    placeholder="Ward No."
                    id="wardno"
                    onChange={handleForm1Change}
                  ></Input>
                </div>
              </div>

              <div class="btn">
                <Button
                  type="button"
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

export default AddingConsultant;
