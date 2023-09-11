import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "components/Footer";
import GrantLeaveRequests from "./GrantLeaveRequests";

function GrantLeaves() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <GrantLeaveRequests />
      <Footer />
    </DashboardLayout>
  );
}

export default GrantLeaves;
