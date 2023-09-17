import { useState } from 'react';

export default function MultiState() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('Batching');

  console.log('Application re-rendered');
  const handleAsyncFetch = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1").then(() => {
        // trigger only one(1) re-render due to Automatic Batching
        setCount(count +1);
        setMessage('Automatic batching');
      });
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleAsyncFetch}>Click Me!</button>
    </>
  )
}
