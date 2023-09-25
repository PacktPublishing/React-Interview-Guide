import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NotFound, ErrorPage } from './ErrorComponents';
import Home from './Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/error" component={ErrorPage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
