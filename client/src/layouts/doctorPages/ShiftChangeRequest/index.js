import React from "react";

// example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "components/Footer";

// components
import MDBox from "components/MDBox";
import ShiftChangeForm from "layouts/doctorPages/ShiftChangeRequest/ShiftChangeRequestForm";

// @mui material components
import Grid from "@mui/material/Grid";

import Header from "./Header";

function ShiftChangeRequest() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Header>
        <MDBox pt={3} mb={3}>
          <Grid container spacing={4}>
            <Grid item xs={10} md={12} lg={10}>
              <MDBox mt={3}>
                <ShiftChangeForm />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>

        <Footer />
      </Header>
    </DashboardLayout>
  );
}

export default ShiftChangeRequest;
