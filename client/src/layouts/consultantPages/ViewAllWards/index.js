import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "components/Footer";
import ViewAllWards from "./ViewAllWards";

function ViewWards() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ViewAllWards />
      <Footer />
    </DashboardLayout>
  );
}

export default ViewWards;
