// example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "components/Footer";

function Overview() {
  return (
    <DashboardLayout>
      <DashboardNavbar />

      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
