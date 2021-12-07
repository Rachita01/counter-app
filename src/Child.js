import React, { useContext } from 'react';
import countContext from './countContext';

const Child = () => {
  const context = useContext(countContext);
  const { countHandler } = context;
  return (
    <div>
      <button onClick={countHandler}>Increment</button>
    </div>
  );
};

export default Child;
