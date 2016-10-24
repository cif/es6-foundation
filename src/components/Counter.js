import React, { PropTypes } from 'react';

export const Counter = (props) => {
  const { count, onClick } = props;
  return (
    <div>
      <h1>The count: <span>{count}</span></h1>
      <button data-test="inc" onClick={() => { onClick(count + 1); }}>Increment</button>
      <button data-test="dec" onClick={() => { onClick(count - 1); }}>Decrement</button>
    </div>
  );
};

Counter.propTypes = {
  count: PropTypes.number,
  onClick: PropTypes.func
};

export default Counter;
