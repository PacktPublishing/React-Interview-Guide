import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Route path="/users/:id" component={Profile} />
    </BrowserRouter>
  );
}
