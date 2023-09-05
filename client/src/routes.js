// React layouts
import Dashboard from "layouts/adminPages/dashboard";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";

import AddWard from "layouts/adminPages/addWard";
import AddDoctor from "layouts/adminPages/addDoctor";
import AddConsultant from "layouts/adminPages/addConsultant";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
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

export default routes;
