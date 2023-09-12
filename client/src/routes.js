// React layouts
import AdminDashboard from "layouts/adminPages/adminDashboard";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import AddWard from "layouts/adminPages/addWard";
import AddDoctor from "layouts/adminPages/addDoctor";
import AddConsultant from "layouts/adminPages/addConsultant";
import DoctorDashboard from "layouts/doctorPages/DoctorDashboard";
import ConsultantDashboard from "layouts/consultantPages/ConsultantDashboard";
import GrantLeaves from "layouts/consultantPages/GrantLeaves";

import EditProfile from "layouts/profile/editprofile";
import ShiftChangeRequest from "layouts/doctorPages/ShiftChangeRequest";
// @mui icons
import Icon from "@mui/material/Icon";
import ShiftChanges from "layouts/consultantPages/ShiftChangesHistory";
import ViewUsers from "layouts/consultantPages/ViewAllUsers";
import ViewWards from "layouts/consultantPages/ViewAllWards";

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

  {
    name: "Edit Profile",
    key: "editProfile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/editprofile",
    component: <EditProfile />,
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
  {
    type: "collapse",
    name: "Shift Change Request",
    key: "shiftChangeRequest",
    icon: <Icon fontSize="small">D</Icon>,
    route: "/shiftChangeRequest",
    component: <ShiftChangeRequest />,
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
    name: "Leave Requests",
    key: "leaverequests",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/grantLeaverequests",
    component: <GrantLeaves />,
  },
  {
    type: "collapse",
    name: "Shift Changes History",
    key: "shiftchanges",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/shiftChangesHistory",
    component: <ShiftChanges />,
  },
  {
    type: "collapse",
    name: "View All Users",
    key: "viewallusers",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/viewAllUsers",
    component: <ViewUsers />,
  },
  {
    type: "collapse",
    name: "View All Wards",
    key: "viewallwards",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/viewAllWards",
    component: <ViewWards />,
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
