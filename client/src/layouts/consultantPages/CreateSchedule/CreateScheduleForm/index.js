import React from "react";
import "./styles.css";
import MDBox from "components/MDBox";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import MDTypography from "components/MDTypography";

function CreateScheduleForm() {
  return (
    <div className="app">
      <h4>Number of Doctors needed per day:</h4>
      <MDBox mt={5} mb={3}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6} xl={4}>
            <MDTypography variant="h5" display="flex">
              Morning
            </MDTypography>
            <form>
              <label> Senior Registrar </label>
              <input type="text" name="SeniorRegistrar1" placeholder="No. of Senior Registrars" />
              <label> Registrar </label>
              <input type="text" name="Registrar1" placeholder="No. of Registrars" />
              <label> Senior Home Officer </label>
              <input
                type="text"
                name="Senior Home Officer"
                placeholder="No. of Senior Home Officers1"
              />
              <label> Medical Officer </label>
              <input type="text" name="Medical Officer1" placeholder="No. of Medical Officers" />
            </form>
          </Grid>
          <Grid item xs={12} md={6} xl={4}>
            <MDTypography variant="h5" display="flex">
              Evening
            </MDTypography>
            <form>
              <label> Senior Registrar </label>
              <input type="text" name="SeniorRegistrar2" placeholder="No. of Senior Registrars" />
              <label> Registrar </label>
              <input type="text" name="Registrar2" placeholder="No. of Registrars" />
              <label> Senior Home Officer </label>
              <input
                type="text"
                name="Senior Home Officer2"
                placeholder="No. of Senior Home Officers"
              />
              <label> Medical Officer </label>
              <input type="text" name="Medical Officer" placeholder="No. of Medical Officers" />
            </form>
            <Divider orientation="vertical" sx={{ mx: 0 }} />
          </Grid>
          <Grid item xs={12} md={6} xl={4}>
            <MDTypography variant="h5" display="flex">
              Night
            </MDTypography>
            <form>
              <label> Senior Registrar </label>
              <input type="text" name="SeniorRegistrar3" placeholder="No. of Senior Registrars" />
              <label> Registrar </label>
              <input type="text" name="Registrar3" placeholder="No. of Registrars" />
              <label> Senior Home Officer </label>
              <input
                type="text"
                name="Senior Home Officer3"
                placeholder="No. of Senior Home Officers"
              />
              <label> Medical Officer </label>
              <input type="text" name="Medical Officer3" placeholder="No. of Medical Officers" />
            </form>
          </Grid>
        </Grid>
      </MDBox>

      <button type="submit"> CREATE SCHEDULE </button>
    </div>
  );
}

export default CreateScheduleForm;
