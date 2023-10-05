import React, { useState, useEffect } from "react";
import Input from "../../../components/InputBox/Input";
import Button from "../../../components/Button/Button";
import "./AddingDoctor.css";
import MDButton from "components/MDButton";
import Axios from "axios";
import BASE_URL from "config/baseUrl";
import PopupModal from "components/PopupModal";

function AddingDoctor() {
  const [form, setForm] = useState({
    fullname: "",
    mobileNo: "",
    position: "",
    email: "",
    password: "",
    address: "",
    wardnumber: "",
    degree: "",
    specialization: "",
  });

  const [wardNumbers, setWardNumbers] = useState([]);

  useEffect(() => {
    // Fetch ward numbers from the Django API endpoint
    Axios.post(`${BASE_URL}mainApp/sendWardDetails`) // Update the URL to match your Django endpoint
      .then((response) => {
        setWardNumbers(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching ward numbers:", error);
      });
  }, []);

  // ...

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
    Axios.post(`${BASE_URL}mainApp/addDoctor`, form)
      .then((response) => {
        setIsLoading(false);
        setOpenModal(true);
        // setForm(form);
      })
      .catch((error) => {
        console.error("Error adding Doctor:", error);
      });
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

          <div className="form_wrap address">
            <div className="form_item">
              <Input
                hName="Full Name"
                type="text"
                placeholder="Full Name"
                id="fullname"
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
                hName="Position"
                type="text"
                placeholder="Position"
                id="position"
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
          <div className="form_wrap address">
            <div className="form_item">
              <p>Ward Number</p>
              <select id="wardnumber" onChange={handleFormChange} value={form.wardnumber}>
                <option value="" disabled>
                  Ward Number
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
                onChange={handleFormChange}
              ></Input>
            </div>
          </div>
          <div className="form_wrap address">
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
      <PopupModal open={openModal} message="Doctor added successfully" onClose={handleCloseModal} />
    </div>
  );
}

export default AddingDoctor;
