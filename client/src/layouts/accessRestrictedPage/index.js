// example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "components/Footer";

// components
import RequestCard from "components/Request";
import MDBox from "components/MDBox";

// @mui material components
import MDTypography from "components/MDTypography";

function AccessRestricted() {
  return (
    <>
      <MDTypography> Access to this page is Restricted</MDTypography>
      <p>Please login as a valid user to get Access.</p>
    </>
  );
}

export default AccessRestricted;
