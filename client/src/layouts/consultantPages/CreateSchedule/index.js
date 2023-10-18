import React from "react";

// example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "components/Footer";

// components
import MDTypography from "components/MDTypography";
import Header from "layouts/consultantPages/CreateSchedule/Header";
import CreateScheduleForm from "layouts/consultantPages/CreateSchedule/CreateScheduleForm";
import MDBox from "components/MDBox";
import Grid from "@mui/material/Grid";

function CreateSchedule() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Header>
        <MDBox pt={3} mb={3}>
          <Grid container spacing={4}>
            <Grid item xs={10} md={12} lg={10}>
              <MDBox mt={3}>
                <CreateScheduleForm />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>

        <Footer />
      </Header>
    </DashboardLayout>
  );
}

export default CreateSchedule;
