import React, { useState } from 'react';
import './style.css';
import Child from './Child';
import countContext from './countContext';
export default function App() {
  const [count, setCount] = useState(0);

  const countHandler = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Counter App with twist</h1>
      <countContext.Provider value={{ count, countHandler }}>
        <Child />
        <h2>{count}</h2>
      </countContext.Provider>
    </div>
  );
}
