import React from "react";
import PropTypes from "prop-types";
import "./ShiftChangesCard.css"; // Import your CSS file

const ShiftChangesCard = ({
  id,
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
};

ShiftChangesCard.propTypes = {
  RequestReceiverName: PropTypes.string.isRequired,
};

ShiftChangesCard.propTypes = {
  fromShiftSlot: PropTypes.string.isRequired,
};
ShiftChangesCard.propTypes = {
  toShiftSlot: PropTypes.string.isRequired,
};
ShiftChangesCard.propTypes = {
  Reason: PropTypes.string.isRequired,
};
ShiftChangesCard.propTypes = {
  Status: PropTypes.string.isRequired,
};
ShiftChangesCard.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ShiftChangesCard;
