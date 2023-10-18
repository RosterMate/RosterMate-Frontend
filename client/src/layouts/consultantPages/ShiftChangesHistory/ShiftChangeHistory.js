import React, { useState, useEffect } from "react";
import "./ShiftChangeHistory.css";
import ShiftChangesCard from "components/ShiftChangesCard/ShiftChangesCard";
import MDTypography from "components/MDTypography";

const ChangesCard = [
  {
    id: 1,
    RequestSenderName: "Dr.Sunil",
    RequestReceiverName: "Dr.Kamal",
    fromShiftSlot: "2023/10/11 13.00-19.00",
    ToShiftSlot: "2023/11/12 13.00-19.00",
    Reason: "Personal Reason",
    Status: "Approved",
  },
  {
    id: 2,
    RequestSenderName: "Dr.Sunil",
    RequestReceiverName: "Dr.Kamal",
    fromShiftSlot: "2023/10/11 13.00-19.00",
    ToShiftSlot: "2023/11/12 13.00-19.00",
    Reason: "Personal Reason",
    Status: "Approved",
  },
  {
    id: 3,
    RequestSenderName: "Dr.Sunil",
    RequestReceiverName: "Dr.Kamal",
    fromShiftSlot: "2023/10/11 13.00-19.00",
    ToShiftSlot: "2023/11/12 13.00-19.00",
    Reason: "Personal Reason",
    Status: "Approved",
  },
  {
    id: 4,
    RequestSenderName: "Dr.Sunil",
    RequestReceiverName: "Dr.Kamal",
    fromShiftSlot: "2023/10/11 13.00-19.00",
    ToShiftSlot: "2023/11/12 13.00-19.00",
    Reason: "Personal Reason",
    Status: "Approved",
  },
  {
    id: 5,
    RequestSenderName: "Dr.Sunil",
    RequestReceiverName: "Dr.Kamal",
    fromShiftSlot: "2023/10/11 13.00-19.00",
    ToShiftSlot: "2023/11/12 13.00-19.00",
    Reason: "Personal Reason",
    Status: "Approved",
  },
  {
    id: 6,
    RequestSenderName: "Dr.Sunil",
    RequestReceiverName: "Dr.Kamal",
    fromShiftSlot: "2023/10/11 13.00-19.00",
    ToShiftSlot: "2023/11/12 13.00-19.00",
    Reason: "Personal Reason",
    Status: "Approved",
  },
  {
    id: 7,
    RequestSenderName: "Dr.Sunil",
    RequestReceiverName: "Dr.Kamal",
    fromShiftSlot: "2023/10/11 13.00-19.00",
    ToShiftSlot: "2023/11/12 13.00-19.00",
    Reason: "Personal Reason",
    Status: "Approved",
  },
  {
    id: 8,
    RequestSenderName: "Dr.Sunil",
    RequestReceiverName: "Dr.Kamal",
    fromShiftSlot: "2023/10/11 13.00-19.00",
    ToShiftSlot: "2023/11/12 13.00-19.00",
    Reason: "Personal Reason",
    Status: "Approved",
  },
];

const ShiftChangeHistory = () => {
  const [isHistoryAvailable, setIsHistoryAvailable] = useState(true);

  return (
    <>
      {isHistoryAvailable ? (
        <>
          <MDTypography variant="h3" display="flex">
            History
          </MDTypography>
          <div className="container">
            {ChangesCard.map((item) => (
              <ShiftChangesCard
                key={item.id}
                RequestSenderName={item.RequestSenderName}
                RequestReceiverName={item.RequestReceiverName}
                fromShiftSlot={item.fromShiftSlot}
                ToShiftSlot={item.ToShiftSlot}
                Reason={item.Reason}
                Status={item.Status}
              />
            ))}
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default ShiftChangeHistory;
