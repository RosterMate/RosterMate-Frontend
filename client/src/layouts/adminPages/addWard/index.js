// React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "components/Footer";
import AddingWard from "./AddingWard";

function AddWard() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <AddingWard />
      <Footer />
    </DashboardLayout>
  );
}

export default AddWard;
