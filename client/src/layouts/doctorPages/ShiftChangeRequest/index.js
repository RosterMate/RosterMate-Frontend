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

      <MDTypography variant="h3" display="flex">
        Shift Change Request From
      </MDTypography>
      <Card
        sx={{
          m: "auto",
          p: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        style={{
          width: window.innerWidth <= 800 ? "100%" : "50%",
        }}
      >
        <ShiftChangeForm />
      </Card>
      <Footer />
    </DashboardLayout>
  );
}

export default ShiftChangeRequest;
