// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "components/Footer";
import MDTypography from "components/MDTypography";
// Data

function ShiftChangeRequest() {
  return (
    <DashboardLayout>
      <DashboardNavbar />

      <MDTypography variant="h3" display="flex">
        Shift Change Request
      </MDTypography>

      <Footer />
    </DashboardLayout>
  );
}

export default ShiftChangeRequest;
