import React, { useState, useEffect } from "react";

const initialValues = {
  fromDate: new Date(),
  toDate: new Date(),
  fromShiftSlot: "",
  toShiftSlot: "",
  Reason: "",
  Status: "",
};

function ShiftChangeForm() {
  const [values, setValues] = useState(initialValues);

  return <form></form>;
}

export default ShiftChangeForm;
