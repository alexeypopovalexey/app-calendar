import React from 'react';

export const Year = (props) => {
  const prevYear = () => {
    props.prevYear(props.number);
  }
  const nextYear = () => {
      props.nextYear(props.number)
    }

    return (
      <div>
        <button onClick={prevYear}>Prev</button>
        <div>{props.number}</div>
        <button onClick={nextYear}>Next</button>
      </div>
    )

}