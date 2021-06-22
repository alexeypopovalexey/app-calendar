import React from "react";
import { Year } from './components/year';
import { Month } from "./components/month";
import { Day } from "./components/day";


export const App =  function App() {
  const [currentYear, setYear] = React.useState(2021);

  const changeToPrevYear = () => {
    setYear(currentYear - 1)
  };
  const changeToNextYear = () => {
    setYear(currentYear + 1)
  };

  const date = new Date(currentYear, 10, 10);
  const month = date.toLocaleString('default', { month: 'long' });


  return (
    <div className="App">
      <App>
        <Year
        number={currentYear}
        onPrevClick={changeToPrevYear}
        onNextClick={changeToNextYear}
        />
        <Month number={month} />
        <Day number={18}/>
      </App>
    </div>
  );
}


