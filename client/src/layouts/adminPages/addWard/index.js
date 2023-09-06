// example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "components/Footer";

function AddWard() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      Add Ward Page
      <Footer />
    </DashboardLayout>
  );
}

export default AddWard;
