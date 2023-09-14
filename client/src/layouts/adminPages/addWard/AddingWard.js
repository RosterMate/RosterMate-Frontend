import React, { useState } from "react";
import Axios from "axios";

//components
import Input from "../../../components/InputBox/Input";
import Button from "../../../components/Button/Button";
import MDButton from "components/MDButton";

// css
import "./AddingWard.css";

// base url to connect backend
import BASE_URL from "config/baseUrl";
import PopupModal from "components/PopupModal";

function AddingWard() {
  const [isLoading, setIsLoading] = useState(true);

  const initialForm = {
    wardname: "",
    wardnumber: "",
    shifts: "",
    maxleaves: "",
    consecutiveshifts: "",
  };

  const [form, setForm] = useState(initialForm);

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
    Axios.post(`${BASE_URL}mainApp/addWard`, form)
      .then((response) => {
        console.log("ward add success :", response.data);
        setIsLoading(false);
        setOpenModal(true);
        setForm(initialForm);
      })
      .catch((error) => {
        console.error("Error fetching doctor details:", error);
      });
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
            <div className="form_item">
              <Input
                hName="Ward Name"
                type="text"
                placeholder="Ward Name"
                id="wardname"
                onChange={handleFormChange}
              ></Input>
            </div>
            <div className="form_item">
              <Input
                hName="Ward Number"
                type="text"
                placeholder="Ward Number"
                id="wardnumber"
                onChange={handleFormChange}
              ></Input>
            </div>
          </div>
          <div className="form_wrap">
            <div className="form_item">
              <Input
                hName="Number of Shifts"
                type="text"
                placeholder="Number of Shifts"
                id="shifts"
                onChange={handleFormChange}
              ></Input>
            </div>
          </div>
          <div className="form_wrap">
            <div className="form_item">
              <Input
                hName="Maximum Leaves Per month"
                type="text"
                placeholder="Maximum Leaves Per month"
                id="maxleaves"
                onChange={handleFormChange}
              ></Input>
            </div>
          </div>

          <div className="form_wrap address">
            <div className="form_item">
              <Input
                hName="Consecutive shifts can be done"
                type="text"
                placeholder="Consecutive shifts can be done"
                id="consecutiveshifts"
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
      <PopupModal open={openModal} message="Ward added successfully" onClose={handleCloseModal} />
    </div>
  );
}

export default AddingWard;
