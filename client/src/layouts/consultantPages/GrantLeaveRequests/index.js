import React from "react";

// example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "components/Footer";

// components
import MDTypography from "components/MDTypography";

function GrantLeaveRequests() {
  return (
    <DashboardLayout>
      <DashboardNavbar />

      <MDTypography variant="h3" display="flex">
        Leave Requests Page
      </MDTypography>

      <Footer />
    </DashboardLayout>
  );
}

export default GrantLeaveRequests;
