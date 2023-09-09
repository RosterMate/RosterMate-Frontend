import React, { useState } from "react";
import Input from "../../../components/InputBox/Input";
import Button from "../../../components/Button/Button";
import "./AddingWard.css";

function AddingWard() {
  const [form, setForm] = useState({
    wardname: "",
    wardnumber: "",
    shifts: "",
    maxleaves: "",
    consecutiveshifts: "",
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

  const handleSubmitButtonClick = () => {};

  return (
    <div className="wrapper">
      <div className="form_container">
        <form name="form">
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
          <div className="para">
            <h4>Ward Constraints</h4>
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

          <div className="btn">
            <Button
              type="button"
              variant="contained"
              onClick={handleSubmitButtonClick}
              showMessage="Submit"
            ></Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddingWard;
