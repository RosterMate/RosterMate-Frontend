// React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "components/Footer";
import AddingDoctor from "./AddingDoctor";

function AddDoctor() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <AddingDoctor />
      <Footer />
    </DashboardLayout>
  );
}

export default AddDoctor;
