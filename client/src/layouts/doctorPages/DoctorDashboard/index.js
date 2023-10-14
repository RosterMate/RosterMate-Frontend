import React, { useState, useEffect } from "react";
import Axios from "axios";

// example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "components/Footer";

// components
import MDTypography from "components/MDTypography";
import { USER_EMAIL } from "layouts/authentication/sign-in";

// base url to connect backend
import BASE_URL from "config/baseUrl";

import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Week,
  Month,
  Agenda,
  Inject,
} from "@syncfusion/ej2-react-schedule";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";

// eslint-disable-next-line react/destructuring-assignment
const PropertyPane = (props) => <div className="mt-5">{props.children}</div>;

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
const currentDay = currentDate.getDate();

function DoctorDashboard() {
  const [scheduleData, setScheduleData] = useState("");

  const data = {
    email: USER_EMAIL,
    ym: "2023-10",
  };

  useEffect(() => {
    Axios.post(`${BASE_URL}mainApp/getScheduleForDoctor`, data)
      .then((response) => {
        setScheduleData(response.data["schedule"]);
        //console.log("getSchedule data:", response.data["schedule"]);
      })
      .catch((error) => {
        console.error("Error fetching getSchedule details:", error);
      });
  }, []);

  const [scheduleObj, setScheduleObj] = useState();

  const change = (args) => {
    scheduleObj.selectedDate = args.value;
    scheduleObj.dataBind();
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />

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
          ref={(schedule) => setScheduleObj(schedule)}
          selectedDate={new Date(currentYear, currentMonth, currentDay)}
          eventSettings={{ dataSource: scheduleData }}
          currentView="Month" // Set the default view to "Month"
        >
          <ViewsDirective>
            {["Week", "Month", "Agenda"].map((item) => (
              <ViewDirective key={item} option={item} />
            ))}
          </ViewsDirective>
          <Inject services={[Week, Month, Agenda]} />
        </ScheduleComponent>

        <PropertyPane>
          <table style={{ width: "100%", background: "white" }}>
            <tbody>
              <tr style={{ height: "50px" }}>
                <td style={{ width: "100%" }}>
                  <DatePickerComponent
                    value={new Date(currentYear, currentMonth, currentDay)}
                    showClearButton={false}
                    placeholder="Go To Date"
                    floatLabelType="Always"
                    change={change}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </PropertyPane>
      </div>
      <Footer />
    </DashboardLayout>
  );
}

export default DoctorDashboard;
