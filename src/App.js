import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
// import Nav from './starWars/Nav'
import Vehicle from './starWars/Vehicle'
import Swapi from './components/Swapi';

class App extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-1">Whole Assignmnet</h1>
        <Router>
          <ul>
            <div className="row">

            <li className="nav nav-item nav-link border bg-info"><Link className="text-dark" to="/">Home</Link></li>
            <li className="nav nav-item nav-link border bg-info"><Link className="text-dark" to="/swapi">Star Wars API</Link></li>
            <li className="nav nav-item nav-link border bg-info"><Link className="text-dark" to="/about">About Us</Link></li>
            <li className="nav nav-item nav-link border bg-info"><Link  className="text-dark"to="/contact">Contact</Link></li>

            </div>
          </ul>
          {/* <Nav /> */}
          <hr />

          <Switch>
            <Route exact path="/" component={Home} />

            <Route exact path="/swapi" component={Swapi} />

            <Route exact path="/about" component={About} />

            <Route exact path="/contact" component={Contact} />

            <Route path="/vehicle/:vehicleId" component={Vehicle} />

            <Route component={Error} />
          </Switch>
        </Router>

        <div className="container-fluid mt-3">
          <div className="footer text-center bg-info">
            <footer>
              Nikhil Nimbalkar 2020
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
