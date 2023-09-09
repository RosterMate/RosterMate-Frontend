// example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "components/Footer";

function AddDoctor() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      Add Doctor Page
      <Footer />
    </DashboardLayout>
  );
}

export default AddDoctor;
