import React from 'react';
import './App.css';
import Navigation from './Navigation';
import Events from './Events';
import About from './About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Switch>
            <Route path="/" exact component={Home} /> 
            <Route path="/home" component={Home} />
            <Route path="/events" component={Events} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    );
  }


function Home() {
    return (
        <div>
            <h1>Home Page</h1>
        </div>
    )
}

  
export default App;

