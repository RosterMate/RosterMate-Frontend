import React, { useState } from "react";

// example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "components/Footer";

// components
import MDTypography from "components/MDTypography";

import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";

import { scheduleData } from "./data";

// eslint-disable-next-line react/destructuring-assignment
const PropertyPane = (props) => <div className="mt-5">{props.children}</div>;

function DoctorDashboard() {
  const [scheduleObj, setScheduleObj] = useState();

  const change = (args) => {
    scheduleObj.selectedDate = args.value;
    scheduleObj.dataBind();
  };

  const onDragStart = (arg) => {
    // eslint-disable-next-line no-param-reassign
    arg.navigation.enable = true;
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
          selectedDate={new Date(2021, 0, 10)}
          eventSettings={{ dataSource: scheduleData }}
        >
          <ViewsDirective>
            {["Day", "Week", "Month", "Agenda"].map((item) => (
              <ViewDirective key={item} option={item} />
            ))}
          </ViewsDirective>
          <Inject services={[Day, Week, Month, Agenda, Resize, DragAndDrop]} />
        </ScheduleComponent>

        <PropertyPane>
          <table style={{ width: "100%", background: "white" }}>
            <tbody>
              <tr style={{ height: "50px" }}>
                <td style={{ width: "100%" }}>
                  <DatePickerComponent
                    value={new Date(2021, 0, 10)}
                    showClearButton={false}
                    placeholder="Current Date"
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
