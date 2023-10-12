import { useState, useMemo } from "react";

function factorial(number) {
  if (number <= 0) {
    return "Number should be positive value.";
  } else if (number === 1) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

export default function CounterFactorial() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1);

  const factorial = useMemo(() => factorial(number), [number]);

  return (
    <>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h2>Factorial: {factorial}</h2>
      <input
        type="number"
        value={number}
        onClick={() => setNumber(number + 1)}
      />
    </>
  );
}
