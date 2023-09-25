import { Route, useParams } from 'react-router-dom';

function MyComponent() {
  let { id } = useParams();

  return <h2>My id is: {id}</h2>;
}

function App() {
  return (
    <Route path="/post/:id">
      <MyComponent />
    </Route>
  );
}
