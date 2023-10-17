// React layouts
import AdminDashboard from "layouts/adminPages/adminDashboard";
import Notifications from "layouts/doctorPages/notifications";
import Profile from "layouts/profile";
import AddWard from "layouts/adminPages/addWard";
import AddDoctor from "layouts/adminPages/addDoctor";
import AddConsultant from "layouts/adminPages/addConsultant";
import DoctorDashboard from "layouts/doctorPages/DoctorDashboard";
import LeaveRequests from "layouts/doctorPages/LeaveRequests";
import ConsultantDashboard from "layouts/consultantPages/ConsultantDashboard";
import CreateSchedule from "layouts/consultantPages/CreateSchedule";
import GrantLeaves from "layouts/consultantPages/GrantLeaves";
import ShiftChanges from "layouts/consultantPages/ShiftChangesHistory";
import ViewUsers from "layouts/consultantPages/ViewAllUsers";
import ShiftChangeRequest from "layouts/doctorPages/ShiftChangeRequest";

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
    name: "Leave Requests",
    key: "leaveRequests",
    icon: <Icon fontSize="small">Requests</Icon>,
    route: "/leaveRequests",
    component: <LeaveRequests />,
  },
  {
    type: "collapse",
    name: "Shift Changes",
    key: "shiftChanges",
    icon: <Icon fontSize="small">Change</Icon>,
    route: "/shiftChanges",
    component: <ShiftChanges />,
  },
  {
    type: "collapse",
    name: "Shift Change Request",
    key: "shiftChangeRequest",
    icon: <Icon fontSize="small">D</Icon>,
    route: "/shiftChangeRequest",
    component: <ShiftChangeRequest />,
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
    name: "Create Schedule",
    key: "createSchedule",
    icon: <Icon fontSize="small">Schedule</Icon>,
    route: "/createSchedule",
    component: <CreateSchedule />,
  },
  {
    type: "collapse",
    name: "Leave Requests",
    key: "leaverequests",
    icon: <Icon fontSize="small">R</Icon>,
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
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
];
