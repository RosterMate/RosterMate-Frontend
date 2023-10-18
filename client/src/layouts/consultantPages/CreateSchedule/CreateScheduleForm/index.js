import React, { useState } from "react";
import "./styles.css";
import MDBox from "components/MDBox";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

function CreateScheduleForm() {
  const [form, setForm] = useState({
    morningSeniorRegistrars: "",
    morningRegistrars: "",
    morningSeniorHomeOfficers: "",
    morningMedicalOfficers: "",
    eveningSeniorRegistrars: "",
    evenningRegistrars: "",
    eveningSeniorHomeOfficers: "",
    eveningMedicalOfficers: "",
    nightSeniorRegistrars: "",
    nightRegistrars: "",
    nightSeniorHomeOfficers: "",
    nightMedicalOfficers: "",
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
    <div className="app">
      <MDBox mt={2} mb={2}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6} xl={4}>
            <MDTypography variant="h5" display="flex">
              Morning
            </MDTypography>
            <form>
              <label> Senior Registrar </label>
              <input
                type="text"
                name="SeniorRegistrar1"
                placeholder="No. of Senior Registrars"
                onChange={handleFormChange}
              />
              <label> Registrar </label>
              <input
                type="text"
                name="Registrar1"
                placeholder="No. of Registrars"
                onChange={handleFormChange}
              />
              <label> Senior Home Officer </label>
              <input
                type="text"
                name="Senior Home Officer"
                placeholder="No. of Senior Home Officers"
              />
              <label> Medical Officer </label>
              <input
                type="text"
                name="Medical Officer1"
                placeholder="No. of Medical Officers"
                onChange={handleFormChange}
              />
            </form>
          </Grid>
          <Grid item xs={12} md={6} xl={4}>
            <MDTypography variant="h5" display="flex">
              Evening
            </MDTypography>
            <form>
              <label> Senior Registrar </label>
              <input
                type="text"
                name="SeniorRegistrar2"
                placeholder="No. of Senior Registrars"
                onChange={handleFormChange}
              />
              <label> Registrar </label>
              <input
                type="text"
                name="Registrar2"
                placeholder="No. of Registrars"
                onChange={handleFormChange}
              />
              <label> Senior Home Officer </label>
              <input
                type="text"
                name="Senior Home Officer"
                placeholder="No. of Senior Home Officers"
              />
              <label> Medical Officer </label>
              <input
                type="text"
                name="Medical Officer"
                placeholder="No. of Medical Officers"
                onChange={handleFormChange}
              />
            </form>
            <Divider orientation="vertical" sx={{ mx: 0 }} />
          </Grid>
          <Grid item xs={12} md={6} xl={4}>
            <MDTypography variant="h5" display="flex">
              Night
            </MDTypography>
            <form>
              <label> Senior Registrar </label>
              <input
                type="text"
                name="SeniorRegistrar3"
                placeholder="No. of Senior Registrars"
                onChange={handleFormChange}
              />
              <label> Registrar </label>
              <input
                type="text"
                name="Registrar3"
                placeholder="No. of Registrars"
                onChange={handleFormChange}
              />
              <label> Senior Home Officer </label>
              <input
                type="text"
                name="Senior Home Officer3"
                placeholder="No. of Senior Home Officers"
              />
              <label> Medical Officer </label>
              <input
                type="text"
                name="Medical Officer3"
                placeholder="No. of Medical Officers"
                onChange={handleFormChange}
              />
            </form>
          </Grid>
        </Grid>
      </MDBox>

      <MDButton color="info" onClick={handleSubmitButtonClick}>
        <MDTypography variant="h4" display="flex">
          Create Schedule
        </MDTypography>
      </MDButton>
    </div>
  );
}

export default CreateScheduleForm;
