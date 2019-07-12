import React from 'react';
import './App.css';
import Navigation from './Navigation';
import Home from './Home';
import Events from './Events';
import About from './About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        error: null,
        loading: true,
        events: []
    };
    // this.apiKey = process.env.REACT_APP_API_KEY
  } 

  componentDidMount() {
    fetch("http://localhost:3030/api/events")
        .then(res => {
            return res.json()
        })
        .then(res => {
            this.setState({
                loading: false,
                events: res.data
            });
            console.log(res.data);
        },
        // Note: It's important to handle errors here 
        // instead of a catch() block so that we don't
        // swallow exceptions from actual bugs in components.

        (error) => {
            this.setState({
                loading: true,
                error
            });
        }

        )
  }

  render(){
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Switch>
            <Route exact path="/" 
                    render={(routeProps) => (<Home {...routeProps} apiData={this.state.events} error={this.state.error} loading={this.state.loading}/>)}
            />
            <Route path="/home" 
                    render={(routeProps) => (<Home {...routeProps} apiData={this.state.events} error={this.state.error} loading={this.state.loading}/>)} 
            />
            <Route path="/events" 
                    render={(routeProps) => (<Events {...routeProps} apiData={this.state.events} error={this.state.error} loading={this.state.loading} />)}
            />
            <Route path="/about"
                    render={(routeProps) => (<About {...routeProps} apiData={this.state.events} error={this.state.error} loading={this.state.loading}/>)}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

