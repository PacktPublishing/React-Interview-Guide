import { useState } from 'react';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Counter App</h1>

      <h2 data-testid="counter-display">Count: {count}</h2>

      <button
        onClick={() => setCount(count + 1)}
        data-testid="increment-button"
      >
        Increment
      </button>

      <button
        onClick={() => setCount(count - 1)}
        data-testid="decrement-button"
      >
        Decrement
      </button>
    </div>
  );
}

export default App;
