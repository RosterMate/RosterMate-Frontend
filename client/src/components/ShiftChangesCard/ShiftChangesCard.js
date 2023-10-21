import React from "react";
import PropTypes from "prop-types";
import "./ShiftChangesCard.css"; // Import your CSS file

const ShiftChangesCard = ({
  RequestSenderName,
  RequestReceiverName,
  fromShiftSlot,
  ToShiftSlot,
  Reason,
  Status,
}) => {
  return (
    <div className="card">
      <h3 className="card-title">{RequestSenderName}</h3>
      <h3 className="card-title">{RequestReceiverName}</h3>
      <p className="card-content">{fromShiftSlot}</p>
      <p className="card-content">{ToShiftSlot}</p>
      <p className="card-content">{Reason}</p>
      <h2 className="card-content">{Status}</h2>
    </div>
  );
};

ShiftChangesCard.propTypes = {
  RequestSenderName: PropTypes.string.isRequired,
  RequestReceiverName: PropTypes.string.isRequired,
  fromShiftSlot: PropTypes.string.isRequired,
  toShiftSlot: PropTypes.string.isRequired,
  Reason: PropTypes.string.isRequired,
  Status: PropTypes.string.isRequired,
};

export default ShiftChangesCard;
