// React layouts
import AdminDashboard from "layouts/adminPages/adminDashboard";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import AddWard from "layouts/adminPages/addWard";
import AddDoctor from "layouts/adminPages/addDoctor";
import AddConsultant from "layouts/adminPages/addConsultant";
import DoctorDashboard from "layouts/doctorPages/DoctorDashboard";
import ConsultantDashboard from "layouts/consultantPages/ConsultantDashboard";

// @mui icons
import Icon from "@mui/material/Icon";

export const adminRoutes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "adminDashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/adminDashboard",
    component: <AdminDashboard />,
  },
  {
    type: "collapse",
    name: "Add Ward",
    key: "addWard",
    icon: <Icon fontSize="small">W</Icon>,
    route: "/addWards",
    component: <AddWard />,
  },
  {
    type: "collapse",
    name: "Add Doctor",
    key: "addDoctor",
    icon: <Icon fontSize="small">D</Icon>,
    route: "/addDoctor",
    component: <AddDoctor />,
  },
  {
    type: "collapse",
    name: "Add Consultant",
    key: "addConsultant",
    icon: <Icon fontSize="small">C</Icon>,
    route: "/addConsultant",
    component: <AddConsultant />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
];

export const doctorRoutes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "doctorDashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/doctorDashboard",
    component: <DoctorDashboard />,
  },
  {
    type: "collapse",
    name: "Notifications",
    key: "notifications",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/notifications",
    component: <Notifications />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
];

export const consultantRoutes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "consultantDashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/consultantDashboard",
    component: <ConsultantDashboard />,
  },
  {
    type: "collapse",
    name: "Notifications",
    key: "notifications",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/notifications",
    component: <Notifications />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
];
