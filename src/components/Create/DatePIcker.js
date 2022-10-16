import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const SelectDate = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <span>Date of birth</span>
      <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
    </>
  );
};

export default SelectDate;
