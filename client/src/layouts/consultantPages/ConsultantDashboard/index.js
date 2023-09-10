import React from "react";

// example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "components/Footer";

// components
import MDTypography from "components/MDTypography";

function ConsultantDashboard() {
  return (
    <DashboardLayout>
      <DashboardNavbar />

      <MDTypography variant="h3" display="flex">
        Consultant Dashboard
      </MDTypography>
      <MDTypography variant="h3" display="flex">
        show current schedule , view doctors, view consultants
      </MDTypography>

      <Footer />
    </DashboardLayout>
  );
}

export default ConsultantDashboard;