// React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

function Notifications() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Footer />
    </DashboardLayout>
  );
}

export default Notifications;
