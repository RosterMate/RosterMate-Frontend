import React from "react";

// components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "components/Footer";
import MDTypography from "components/MDTypography";
import CreateScheduleForm from "layouts/consultantPages/CreateSchedule/CreateScheduleForm";
import MDBox from "components/MDBox";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

function CreateSchedule() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDTypography variant="h3" display="flex">
        Create Schedule
      </MDTypography>
      <Card
        sx={{
          mt: 1,
          mx: 1,
          px: 2,
          pb: 2,
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} md={12} lg={12}>
            <CreateScheduleForm />
          </Grid>
        </Grid>
      </Card>
      <Footer />
    </DashboardLayout>
  );
}

export default CreateSchedule;
