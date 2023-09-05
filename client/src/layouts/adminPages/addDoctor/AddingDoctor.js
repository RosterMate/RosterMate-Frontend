import React from "react";
import Input from "../../../components/InputBox/Input";
import Button from "../../../components/Button/Button";
import "./AddingDoctor.css";

function AddingDoctor() {
  return (
    // <div className="">
    //   <div className="transparent-box">
    //     <div className="title">
    //       <h1 className="add">ADD DOCTOR</h1>
    //     </div>
    //     <div className="">
    //       <p className="personal-info">Personal Information</p>
    //     </div>
    //     <Input
    //       hName="Full Name"
    //       type="Full Name"
    //       className="input-box"
    //       placeholder="Full Name"
    //       id="fullName"
    //       autoComplete=""
    //       required
    //       value=""
    //       onChange=""
    //     ></Input>

    //     <Input
    //       hName="Mobile No."
    //       type="Mobile No."
    //       className="input-box"
    //       placeholder="Mobile No."
    //       id="mobileNo"
    //       autoComplete=""
    //       required
    //       value=""
    //       onChange=""
    //     ></Input>

    //     <Input
    //       hName="Email"
    //       type="Email"
    //       className="input-box"
    //       placeholder="Email"
    //       id="email"
    //       autoComplete=""
    //       required
    //       value=""
    //       onChange=""
    //     ></Input>

    //     <Input
    //       hName="Password"
    //       type="Password"
    //       className="input-box"
    //       placeholder="Password"
    //       id="password"
    //       autoComplete=""
    //       required
    //       value=""
    //       onChange=""
    //     ></Input>

    //     <Input
    //       hName="Address"
    //       type="Address"
    //       className="input-box"
    //       placeholder="Address"
    //       id="address"
    //       autoComplete=""
    //       required
    //       value=""
    //       onChange=""
    //     ></Input>
    //     <div>
    //       <Button
    //         className="button"
    //         type="Submit"
    //         fullWidth
    //         variant="contained"
    //         onClick=""
    //         showMessage="Next"
    //       ></Button>
    //     </div>
    //   </div>
    // </div>
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
                value=""
                onChange=""
              ></Input>
              <div class="error" id="fname"></div>
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
                value=""
                onChange=""
              ></Input>
              <div class="error" id="lname"></div>
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
                value=""
                onChange=""
              ></Input>
              <div class="error" id="email"></div>
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
                value=""
                onChange=""
              ></Input>
              <div class="error" id="phone"></div>
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
                value=""
                onChange=""
              ></Input>
              <div class="error" id="phone"></div>
            </div>
          </div>

          <div class="btn">
            <Button
              className=""
              type="Submit"
              fullWidth
              variant="contained"
              onClick=""
              showMessage="Next"
            ></Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddingDoctor;
