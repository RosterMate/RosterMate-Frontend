import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "components/Footer";
import ViewAllUsers from "./ViewAllUsers";

function ViewUsers() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ViewAllUsers />
      <Footer />
    </DashboardLayout>
  );
}

export default ViewUsers;
