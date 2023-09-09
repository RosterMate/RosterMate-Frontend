// React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "components/Footer";
import AddingConsultant from "./AddingConsultant";

function AddConsultant() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <AddingConsultant />
      <Footer />
    </DashboardLayout>
  );
}

export default AddConsultant;
