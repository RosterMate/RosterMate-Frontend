import React, { useState, useEffect } from "react";
import Axios from "axios";

// example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "components/Footer";

// @mui material components
import Grid from "@mui/material/Grid";

// components
import MDBox from "components/MDBox";
import UserCard from "components/Cards/UserCard";
import MDTypography from "components/MDTypography";
import ScrollableContainer from "components/ScrollableContainer";
import GrantLeaveRequests from "../GrantLeaves/GrantLeaveRequests";
import { USER_EMAIL, USER_TYPE } from "layouts/authentication/sign-in";

// base url to connect backend
import BASE_URL from "config/baseUrl";
import Loading from "components/Loading";

import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Week,
  Month,
  Agenda,
  Inject,
} from "@syncfusion/ej2-react-schedule";

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
const currentDay = currentDate.getDate();

function ConsultantDashboard() {
  const [docDetails, setDocDetails] = useState([]);
  const [conDetails, setConDetails] = useState([]);
  const [isLoadingDocDetails, setIsLoadingDocDetails] = useState(true);
  const [isLoadingConDetails, setIsLoadingConDetails] = useState(true);
  const [scheduleData, setScheduleData] = useState("");
  const [wardName, setWardName] = useState("");

  const data = {
    email: USER_EMAIL,
    ym: "2023-10",
  };
  const data2 = {
    email: USER_EMAIL,
    type: USER_TYPE,
  };

  useEffect(() => {
    // Schedule data
    Axios.post(`${BASE_URL}mainApp/getScheduleForWard`, data)
      .then((response) => {
        setWardName(response.data["wardName"]);
        //console.log("wardName:", response.data["wardName"]);
        setScheduleData(response.data["schedule"]);
        //console.log("getSchedule data:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching getSchedule details:", error);
      });

    // Doctor details
    Axios.post(`${BASE_URL}mainApp/consViewDoctors`, data2)
      .then((response2) => {
        if (response2.data["message"]) {
          console.log(response2.data["message"]);
        } else {
          setDocDetails(response2.data);
          //console.log("doctorDetails data:", response2.data);
        }
        setIsLoadingDocDetails(false);
      })
      .catch((error) => {
        console.error("Error fetching doctor details:", error);
      });

    // Consultant details
    Axios.post(`${BASE_URL}mainApp/consViewConsultants`, data2)
      .then((response3) => {
        if (response3.data["message"]) {
          console.log(response3.data["message"]);
        } else {
          setConDetails(response3.data);
          //console.log("doctorDetails data:", response2.data);
        }
        setIsLoadingConDetails(false);
      })
      .catch((error) => {
        console.error("Error fetching doctor details:", error);
      });
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />

      <MDTypography variant="h3" display="flex" style={{ marginBottom: "10px" }}>
        {wardName} Schedule
      </MDTypography>

      <div
        style={{
          padding: "1rem",
          backgroundColor: "white",
          borderRadius: "1.5rem", // 3xl rounded corners
          // You can adjust these values for different screen sizes
          "@media (min-width: 768px)": {
            margin: "10px",
            padding: "10px",
            marginTop: "24px",
            borderRadius: "1.5rem", // 3xl rounded corners for larger screens
          },
        }}
      >
        <ScheduleComponent
          height="650px"
          selectedDate={new Date(currentYear, currentMonth, currentDay)}
          eventSettings={{ dataSource: scheduleData }}
          currentView="Month" // Set the default view to "Month"
        >
          <ViewsDirective>
            {["Month", "Agenda"].map((item) => (
              <ViewDirective key={item} option={item} />
            ))}
          </ViewsDirective>
          <Inject services={[Month, Agenda]} />
        </ScheduleComponent>
      </div>

      <MDTypography variant="h3" display="flex" style={{ margin: "10px" }}>
        Doctors
      </MDTypography>
      {isLoadingDocDetails ? (
        <Loading />
      ) : (
        <ScrollableContainer>
          {docDetails.map((user, id) => (
            <Grid key={id} item xs={6} md={3} xl={2}>
              <MDBox mx={1} mb={1}>
                <UserCard img={user.img} name={user.name} description={user.position} />
              </MDBox>
            </Grid>
          ))}
        </ScrollableContainer>
      )}

      <MDTypography variant="h3" display="flex" style={{ margin: "10px" }}>
        Consultants
      </MDTypography>
      {isLoadingConDetails ? (
        <Loading />
      ) : (
        <ScrollableContainer>
          {conDetails.map((user, id) => (
            <Grid key={id} item xs={6} md={3} xl={2}>
              <MDBox mx={1} mb={1}>
                <UserCard img={user.img} name={user.name} description={user.position} />
              </MDBox>
            </Grid>
          ))}
        </ScrollableContainer>
      )}
      <Footer />
    </DashboardLayout>
  );
}

export default ConsultantDashboard;
