import React from "react";

// example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "components/Footer";

// components
import MDTypography from "components/MDTypography";
import GrantLeaveRequests from "../GrantLeaves/GrantLeaveRequests";

function ConsultantDashboard() {
  return (
    <DashboardLayout>
      <DashboardNavbar />

      <MDTypography variant="h3" display="flex">
        {/* <GrantLeaveRequests /> */}
      </MDTypography>

      <Footer />
    </DashboardLayout>
  );
}

export default ConsultantDashboard;
