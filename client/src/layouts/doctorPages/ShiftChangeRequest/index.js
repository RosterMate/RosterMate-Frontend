// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import ShiftChangeForm from "components/ShiftChangeRequestForm";
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "components/Footer";

// @mui material components
import Grid from "@mui/material/Grid";
// Overview page componen

// Data

function ShiftChangeRequest() {
  return (
    <DashboardLayout>
      <DashboardNavbar />

      <MDBox pt={3} mb={2}>
        <Grid container spacing={3}>
          <Grid item xs={10} md={8} lg={6}>
            <MDBox mt={3}>
              <ShiftChangeForm />
            </MDBox>
          </Grid>
          <Grid item xs={10} md={8} lg={6}>
            <MDBox mt={3}></MDBox>
          </Grid>
        </Grid>
      </MDBox>

      <Footer />
    </DashboardLayout>
  );
}

export default ShiftChangeRequest;
