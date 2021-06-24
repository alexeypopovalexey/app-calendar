
import React from "react";
import { Year } from "./year";
import { Day } from "./day";
import { Month } from "./month";

export const App = function() {
  const [currentYear, setYear] = React.useState(2021)

  const changeYear = function(yearNumber) {
    setYear(yearNumber);
  }

  const date = new Date(currentYear, 5, 10);
  const month = date.toLocaleString('default', { month: 'long' });

  return (
    <div className="app">
      <Year
      number={currentYear}
      onYearChange={changeYear}
      />
      <Month
      number={month}
      />
      <Day
      number={18}
      />
    </div>
  );
}
