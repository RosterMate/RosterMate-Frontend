import React from "react";
import PropTypes from "prop-types";
import MDBox from "components/MDBox";

// @mui material components

import "./LeaveRequestCard.css"; // Import your CSS file

const LeaveRequestCard = ({ id, DoctorName, Date, ShiftSlotTime, Reason }) => {
  return (
    <div className="card">
      <h2 className="card-title">
        {DoctorName}
        {id}
      </h2>
      <p className="card-content">{Date}</p>
      <p className="card-content">{ShiftSlotTime}</p>
      <p className="card-content">{Reason}</p>
      <button className="btn">Accept</button>
      <button className="btn">Reject</button>
    </div>
  );
};

LeaveRequestCard.propTypes = {
  DoctorName: PropTypes.string.isRequired,
};

LeaveRequestCard.propTypes = {
  id: PropTypes.string.isRequired,
};

LeaveRequestCard.propTypes = {
  Date: PropTypes.string.isRequired,
};
LeaveRequestCard.propTypes = {
  ShiftSlotTime: PropTypes.string.isRequired,
};
LeaveRequestCard.propTypes = {
  Reason: PropTypes.string.isRequired,
};

export default LeaveRequestCard;
