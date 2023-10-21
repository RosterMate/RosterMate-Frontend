import React from "react";

// example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "components/Footer";

// components
import RequestCard from "components/Request";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// @mui material components
import Grid from "@mui/material/Grid";

function ShiftChanges() {
  return (
    <DashboardLayout>
      <DashboardNavbar />

      <MDTypography variant="h3" display="flex">
        Shift Changes
      </MDTypography>

      <MDBox pt={3} mb={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mt={3}>
              <RequestCard
                isReceived={true}
                status="NoResponse"
                fromOrTo="Dr.Weerasekara"
                FromDate="2023-12-14"
                FromShift="Morning"
                FromTime="08.00 - 12.00"
                ToDate="2023-12-14"
                ToShift="Night"
                ToTime="19.00 - 08.00"
                count={7}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mt={3}>
              <RequestCard
                isReceived={true}
                status="NoResponse"
                fromOrTo="Dr.Weerasekara"
                FromDate="2023-12-14"
                FromShift="Morning"
                FromTime="08.00 - 12.00"
                ToDate="2023-12-14"
                ToShift="Night"
                ToTime="19.00 - 08.00"
              />
            </MDBox>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <MDBox mt={3}>
              <RequestCard
                status="Rejected"
                fromOrTo="Dr.Weerasekara"
                FromDate="2023-12-14"
                FromShift="Morning"
                FromTime="08.00 - 12.00"
                ToDate="2023-12-14"
                ToShift="Night"
                ToTime="19.00 - 08.00"
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mt={3}>
              <RequestCard
                status="Accepted"
                fromOrTo="Dr.Weerasekara"
                FromDate="2023-12-14"
                FromShift="Morning"
                FromTime="08.00 - 12.00"
                ToDate="2023-12-14"
                ToShift="Night"
                ToTime="19.00 - 08.00"
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mt={3}>
              <RequestCard
                status="Accepted"
                fromOrTo="Dr.Weerasekara"
                FromDate="2023-12-14"
                FromShift="Morning"
                FromTime="08.00 - 12.00"
                ToDate="2023-12-14"
                ToShift="Night"
                ToTime="19.00 - 08.00"
              />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>

      <Footer />
    </DashboardLayout>
  );
}

export default ShiftChanges;
