import React from 'react';

export const Year = (props) => {
  const prevYear = () => {
    props.onYearChange(props.number - 1);
  }
  const nextYear = () => {
    props.onYearChange(props.number + 1);
  }

  return (
    <div>
      <button onClick={prevYear}>Prev</button>
      <div>{props.number}</div>
      <button onClick={nextYear}>Next</button>
    </div>
  )

}