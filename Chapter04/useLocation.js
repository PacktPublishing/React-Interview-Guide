import { useLocation } from 'react-router-dom';

function MyComponent() {
  const location = useLocation();

  console.log(location.state.myData); // Outputs: "Hello, World!"

  // ...
}
