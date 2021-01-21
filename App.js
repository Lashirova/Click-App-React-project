import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const increase = () =>  setCount(count + 1);

  const decrease = () =>  setCount(count - 1);

  const reset = () =>  setCount(0);

  return (
    <div style={{textAlign: 'center'}}>
      <h1>You have clicked {count} times.</h1>
      <button onClick={decrease}>Decrease -</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increase}>Increase +</button>
      
    </div>
  );
}

export default App;
