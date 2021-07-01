
import React, { useState } from "react";
import { Year } from "../Year/Year";
import { Month } from "../Month/Month";
import { Day } from "../Day/Day";

export const App = function() {
  const [currentYear, setYear] = useState(new Date().getFullYear())

  const changeYear = function(yearNumber) {
    setYear(yearNumber);
  }



  return (
    <>
      <div className="app">
        <Year
        year={currentYear}
        onYearChange={changeYear}
        />
        <Day
        number={18}
        />
      </div>
    </>
  );
}
