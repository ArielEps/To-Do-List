import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./ControlCalendar.css"; // Import your custom styles

export default function ControlCalendar() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} locale="en-US" />
    </div>
  );
}
