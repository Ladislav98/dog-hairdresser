import DatePicker from "react-datepicker";
import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { CalendarText, StyledDatePicker } from "./CalendarStyle";

function Calendar() {
  const [date, setDate] = useState(null);

  const handleDateSelect = (selectedDate) => {
    setDate(selectedDate);
  };

  const handleDateChange = (changedDate) => {
    setDate(changedDate);
  };

  return (
    <StyledDatePicker>
      <FaCalendarAlt />
      <DatePicker
        dateFormat="dd/MM/yyyy"
        selected={date}
        onSelect={handleDateSelect} // when day is clicked
        onChange={handleDateChange} // only when value has changed
        toggleCalendarOnIconClick
      />
      <CalendarText>Pick the date</CalendarText>
    </StyledDatePicker>
  );
}

export default Calendar;
