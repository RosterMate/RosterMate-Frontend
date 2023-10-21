import React from "react";

// example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "components/Footer";

// components
import MDBox from "components/MDBox";
import ShiftChangeForm from "layouts/doctorPages/ShiftChangeRequest/ShiftChangeRequestForm";
import MDTypography from "components/MDTypography";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

function ShiftChangeRequest() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Card
        sx={{
          m: 1,
          p: 2,
        }}
      >
        <MDTypography variant="h3" display="flex">
          Shift Change Request From
        </MDTypography>

        <MDBox mb={3}>
          <ShiftChangeForm />
        </MDBox>
      </Card>
      <Footer />
    </DashboardLayout>
  );
}

export default ShiftChangeRequest;
