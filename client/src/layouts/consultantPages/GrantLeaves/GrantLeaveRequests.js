import React from "react";
import MDBox from "components/MDBox";
import Grid from "@mui/material/Grid";
import LeaveRequestCard from "../../../components/LeaveRequestCard/LeaveRequestCard";
import "./GrantLeaveRequests.css";

const cardDetails = [
  {
    id: 1,
    DoctorName: "Dr.Sunil",
    Date: "2023-09-12",
    ShiftSlotTime: "1.00pm - 7.00pm",
    Reason: "Personal Reason",
  },
  {
    id: 2,
    DoctorName: "Dr.Sunil",
    Date: "2023-09-12",
    ShiftSlotTime: "1.00pm - 7.00pm",
    Reason: "Personal Reason",
  },
  {
    id: 3,
    DoctorName: "Dr.Sunil",
    Date: "2023-09-12",
    ShiftSlotTime: "1.00pm - 7.00pm",
    Reason: "Personal Reason",
  },
  {
    id: 4,
    DoctorName: "Dr.Sunil",
    Date: "2023-09-12",
    ShiftSlotTime: "1.00pm - 7.00pm",
    Reason: "Personal Reason",
  },
  {
    id: 5,
    DoctorName: "Dr.Sunil",
    Date: "2023-09-12",
    ShiftSlotTime: "1.00pm - 7.00pm",
    Reason: "Personal Reason",
  },
  {
    id: 6,
    DoctorName: "Dr.Sunil",
    Date: "2023-09-12",
    ShiftSlotTime: "1.00pm - 7.00pm",
    Reason: "Personal Reason",
  },
  {
    id: 7,
    DoctorName: "Dr.Sunil",
    Date: "2023-09-12",
    ShiftSlotTime: "1.00pm - 7.00pm",
    Reason: "Personal Reason",
  },
  {
    id: 8,
    DoctorName: "Dr.Sunil",
    Date: "2023-09-12",
    ShiftSlotTime: "1.00pm - 7.00pm",
    Reason: "Personal Reason",
  },
];

const GrantLeaveRequests = () => {
  return (
    <div className="container">
      {cardDetails.map((item) => (
        <LeaveRequestCard
          key={item.id}
          DoctorName={item.DoctorName}
          Date={item.Date}
          ShiftSlotTime={item.ShiftSlotTime}
          Reason={item.Reason}
        />
      ))}
    </div>
  );
};

export default GrantLeaveRequests;
