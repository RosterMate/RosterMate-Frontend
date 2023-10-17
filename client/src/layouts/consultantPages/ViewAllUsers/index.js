import React from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "components/Footer";
import DoctorDetailsTable from "./DoctorDetailsTable";
import ConDetailsTable from "./ConDetailsTable";

function ViewUsers() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <DoctorDetailsTable />
      <ConDetailsTable />

      <Footer />
    </DashboardLayout>
  );
}

export default ViewUsers;
