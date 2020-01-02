import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const Root = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link style={{ color: 'white' }} to="/">
            <ul>Home</ul>
          </Link>
        </nav>
        <center>
          <main>
            <h1> Joanne The Groomer </h1>
            <h2> Sign Up!</h2>
            <h2> About Me:</h2>
          </main>
          <Switch>
            <Route exact path="/" />
          </Switch>
        </center>
      </div>
    </Router>
  );
};

export default Root;
