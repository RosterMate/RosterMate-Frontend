// React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

function AddConsultant() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      Add Consultant Page
      <Footer />
    </DashboardLayout>
  );
}

export default AddConsultant;
