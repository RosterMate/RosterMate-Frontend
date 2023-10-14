import "App.css";

// react components & @mui material components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// example components
import Sidenav from "./examples/Sidenav";

// React themes
import theme from "./assets/theme";
import themeDark from "./assets/theme-dark";

// React contexts
import { useMaterialUIController, setMiniSidenav } from "./context";

// Images
import brandWhite from "./assets/images/logo-ct.png";
import brandDark from "./assets/images/logo-ct-dark.png";

// React routes
import { adminRoutes, doctorRoutes, consultantRoutes } from "./routes";

// React layouts
import AdminDashboard from "layouts/adminPages/adminDashboard";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import SignIn, { USER_TYPES, USER_TYPE } from "layouts/authentication/sign-in";
import AddWard from "layouts/adminPages/addWard";
import AddDoctor from "layouts/adminPages/addDoctor";
import AddConsultant from "layouts/adminPages/addConsultant";
import DoctorDashboard from "layouts/doctorPages/DoctorDashboard";
import LeaveRequests from "layouts/doctorPages/LeaveRequests";
//import ShiftChanges from "layouts/doctorPages/ShiftChanges";
import ConsultantDashboard from "layouts/consultantPages/ConsultantDashboard";
import CreateSchedule from "layouts/consultantPages/CreateSchedule";
import AccessRestricted from "layouts/accessRestrictedPage";
import GrantLeaves from "layouts/consultantPages/GrantLeaves";
import ShiftChanges from "layouts/consultantPages/ShiftChangesHistory";
import ShiftChangeRequest from "layouts/doctorPages/ShiftChangeRequest";
import ViewUsers from "layouts/consultantPages/ViewAllUsers";

export default function App() {
  const [controller, dispatch] = useMaterialUIController();
  const {
    miniSidenav,
    direction,
    layout,
    sidenavColor,
    transparentSidenav,
    whiteSidenav,
    darkMode,
  } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const { pathname } = useLocation();

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  return (
    <ThemeProvider theme={darkMode ? themeDark : theme}>
      <CssBaseline />
      {layout === "dashboard" && pathname !== "/" && (
        <>
          {USER_TYPE === USER_TYPES.ADMIN_USER && (
            <Sidenav
              color={sidenavColor}
              brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
              brandName="RosterMate"
              routes={adminRoutes}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
            />
          )}
          {USER_TYPE === USER_TYPES.CONSULTANT_USER && (
            <Sidenav
              color={sidenavColor}
              brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
              brandName="RosterMate"
              routes={consultantRoutes}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
            />
          )}
          {USER_TYPE === USER_TYPES.DOCTOR_USER && (
            <Sidenav
              color={sidenavColor}
              brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
              brandName="RosterMate"
              routes={doctorRoutes}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
            />
          )}
        </>
      )}

      <Routes>
        {/* Common Pages */}
        <Route path="/" element={<SignIn />} />

        <Route
          path="/profile"
          element={
            <UserElement>
              <Profile />
            </UserElement>
          }
        />
        <Route
          path="/notifications"
          element={
            <DocConElement>
              <Notifications />
            </DocConElement>
          }
        />
        {/* Admin Pages */}
        <Route
          path="/adminDashboard"
          element={
            <AdminElement>
              <AdminDashboard />
            </AdminElement>
          }
        />
        <Route
          path="/addWards"
          element={
            <AdminElement>
              <AddWard />
            </AdminElement>
          }
        />
        <Route
          path="/addDoctor"
          element={
            <AdminElement>
              <AddDoctor />
            </AdminElement>
          }
        />
        <Route
          path="/addConsultant"
          element={
            <AdminElement>
              <AddConsultant />
            </AdminElement>
          }
        />
        {/* Doctor Pages */}
        <Route
          path="/doctorDashboard"
          element={
            <DoctorElement>
              <DoctorDashboard />
            </DoctorElement>
          }
        />
        <Route
          path="/leaveRequests"
          element={
            <DoctorElement>
              <LeaveRequests />
            </DoctorElement>
          }
        />
        <Route
          path="/shiftChanges"
          element={
            <DoctorElement>
              <ShiftChanges />
            </DoctorElement>
          }
        />

        <Route
          path="/shiftChangeRequest"
          element={
            <DoctorElement>
              <ShiftChangeRequest />
            </DoctorElement>
          }
        />

        {/* Consultant Pages */}
        <Route
          path="/consultantDashboard"
          element={
            <ConsultantElement>
              <ConsultantDashboard />
            </ConsultantElement>
          }
        />

        <Route
          path="/createSchedule"
          element={
            <ConsultantElement>
              <CreateSchedule />
            </ConsultantElement>
          }
        />

        <Route
          path="/viewAllUsers"
          element={
            <ConsultantElement>
              <ViewUsers />
            </ConsultantElement>
          }
        />

        {/* Page Not Found */}
        <Route path="/error" element={<AccessRestricted />} />

        <Route
          path="/grantLeaverequests"
          element={
            <ConsultantElement>
              <GrantLeaves />
            </ConsultantElement>
          }
        />

        <Route
          path="/shiftChangesHistory"
          element={
            <ConsultantElement>
              <ShiftChanges />
            </ConsultantElement>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

function AdminElement({ children }) {
  if (USER_TYPE === USER_TYPES.ADMIN_USER) {
    return <>{children}</>;
  } else {
    return <Navigate to="/error" />;
  }
}
function DoctorElement({ children }) {
  if (USER_TYPE === USER_TYPES.DOCTOR_USER) {
    return <>{children}</>;
  } else {
    return <Navigate to="/error" />;
  }
}
function ConsultantElement({ children }) {
  if (USER_TYPE === USER_TYPES.CONSULTANT_USER) {
    return <>{children}</>;
  } else {
    return <Navigate to="/error" />;
  }
}
function UserElement({ children }) {
  if (
    USER_TYPE === USER_TYPES.ADMIN_USER ||
    USER_TYPE === USER_TYPES.DOCTOR_USER ||
    USER_TYPE === USER_TYPES.CONSULTANT_USER
  ) {
    return <>{children}</>;
  } else {
    return <Navigate to="/error" />;
  }
}
function DocConElement({ children }) {
  if (USER_TYPE === USER_TYPES.DOCTOR_USER || USER_TYPE === USER_TYPES.CONSULTANT_USER) {
    return <>{children}</>;
  } else {
    return <Navigate to="/error" />;
  }
}

AdminElement.propTypes = {
  children: PropTypes.node.isRequired,
};
DoctorElement.propTypes = {
  children: PropTypes.node.isRequired,
};
ConsultantElement.propTypes = {
  children: PropTypes.node.isRequired,
};
UserElement.propTypes = {
  children: PropTypes.node.isRequired,
};
DocConElement.propTypes = {
  children: PropTypes.node.isRequired,
};
