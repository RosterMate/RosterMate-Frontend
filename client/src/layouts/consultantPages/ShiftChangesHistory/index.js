import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "components/Footer";
import ShiftChangeHistory from "./ShiftChangeHistory";

function ShiftChanges() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ShiftChangeHistory />
      <Footer />
    </DashboardLayout>
  );
}

export default ShiftChanges;
