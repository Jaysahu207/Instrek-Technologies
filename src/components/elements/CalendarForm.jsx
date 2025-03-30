import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import default styles
import { format } from "date-fns";

const CalendarForm = ({ setSelectedDate }) => {
  const [date, setDate] = useState(new Date());
  console.log(date);

  const handleDateChange = (newDate) => {
    setDate(newDate);
    if (setSelectedDate) {
      setSelectedDate(newDate); // Send the selected date to the parent component
    } // Send date to parent component
  };
  return (
    <div className="flex flex-col items-center bg-gray-900 text-white p-6 rounded-xl shadow-lg w-full max-w-md mx-auto">
      <h2 className="text-lg font-semibold mb-4">
        📅 Select Appointment Date{" "}
      </h2>

      {/* Calendar Component */}
      <div className="w-full">
        <Calendar
          onChange={handleDateChange}
          value={date}
          className="bg-white text-black rounded-lg shadow-lg p-4 w-full"
          tileClassName={({ date, view }) =>
            view === "month" &&
            date.toDateString() === new Date().toDateString()
              ? "bg-blue-500 text-white rounded-lg"
              : ""
          }
        />
      </div>
      {/* Selected Date Display */}
      <p className="mt-4 text-sm">
        Selected Date:{" "}
        <span className="font-bold text-blue-400">{format(date, "PPP")}</span>
      </p>
    </div>
  );
};

export default CalendarForm;
