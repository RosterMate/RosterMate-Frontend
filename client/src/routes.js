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
import AddHomeIcon from "@mui/icons-material/AddHomeWork";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import CreateIcon from "@mui/icons-material/Create";
import GroupsIcon from "@mui/icons-material/Groups";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircleOutlined";

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
    icon: <AddHomeIcon />,
    route: "/addWards",
    component: <AddWard />,
  },
  {
    type: "collapse",
    name: "Add Doctor",
    key: "addDoctor",
    icon: <PersonAddIcon />,
    route: "/addDoctor",
    component: <AddDoctor />,
  },
  {
    type: "collapse",
    name: "Add Consultant",
    key: "addConsultant",
    icon: <PersonAddIcon />,
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
    icon: <AutoAwesomeMotionIcon />,
    route: "/leaveRequests",
    component: <LeaveRequests />,
  },
  {
    type: "collapse",
    name: "Shift Changes",
    key: "shiftChanges",
    icon: <ChangeCircleIcon />,
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
    icon: <CreateIcon />,
    route: "/createSchedule",
    component: <CreateSchedule />,
  },
  {
    type: "collapse",
    name: "Leave Requests",
    key: "leaverequests",
    icon: <AutoAwesomeMotionIcon />,
    route: "/grantLeaverequests",
    component: <GrantLeaves />,
  },
  {
    type: "collapse",
    name: "Shift Changes History",
    key: "shiftchanges",
    icon: <ChangeCircleIcon />,
    route: "/shiftChangesHistory",
    component: <ShiftChanges />,
  },
  {
    type: "collapse",
    name: "View All Users",
    key: "viewallusers",
    icon: <GroupsIcon />,
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
