import React from "react";

// components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "components/Footer";
import MDTypography from "components/MDTypography";
import CreateScheduleForm from "layouts/consultantPages/CreateSchedule/CreateScheduleForm";
import Card from "@mui/material/Card";

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
        <CreateScheduleForm />
      </Card>

      <Footer />
    </DashboardLayout>
  );
}

export default CreateSchedule;
