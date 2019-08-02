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
        events: [],
        searchTerm: '',
        distance: 2
    };
    // this.apiKey = process.env.REACT_APP_API_KEY
  } 

  componentDidMount() {
    fetch("http://localhost:3030/api/events/?limit=100")
        .then(res => {
            return res.json()
        })
        .then(res => {
            this.setState({
                loading: false,
                events: res.data
            });
            //console.log(res.data);
        },
        // Note: It's important to handle errors here 
        // instead of a catch() block so that we don't
        // swallow exceptions from actual bugs in components.

        (error) => {
            this.setState({
                loading: true,
                error
            });
        });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(encodeURI(`http://localhost:3030/api/events/?tags_search=${this.state.searchTerm}&limit=100`));

    fetch(encodeURI(`http://localhost:3030/api/events/?tags_search=${this.state.searchTerm}`))
      .then(res => {
        return res.json()
      })
      .then(res => {
        this.setState({
          loading: false,
          events: res.data
        });
        //console.log(res.data);
      },
        // Note: It's important to handle errors here 
        // instead of a catch() block so that we don't
        // swallow exceptions from actual bugs in components.

        (error) => {
          this.setState({
            loading: true,
            error
          });
        });

    // console.log("searched keywords: ", this.state.searchTerm);
  }


  handleInputChange = (e) => {
    console.log("search input change");
    this.setState({searchTerm: e.target.value})
  }

  handleDistanceChange = (e) => {
    this.setState({distance: e.target.value})
  }

  handleDistanceSubmit = (e) => {
    console.log("sdfsd")
    e.preventDefault();
    // console.log(encodeURI(`http://localhost:3030/api/events/?tags_search=${this.state.searchTerm}&limit=100`));

    fetch(encodeURI(`http://localhost:3030/api/events/?distance_filter=60.2433272,24.8560624,${this.state.distance}`))
      .then(res => {
        return res.json()
      })
      .then(res => {
        this.setState({
          loading: false,
          events: res.data
        });
        //console.log(res.data);
      },
        // Note: It's important to handle errors here 
        // instead of a catch() block so that we don't
        // swallow exceptions from actual bugs in components.

        (error) => {
          this.setState({
            loading: true,
            error
          });
        });

    console.log("searched keywords: ", this.state.searchTerm);
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
                    render={(routeProps) => (<Events {...routeProps} 
                      apiData={this.state.events} 
                      handleInputChange={this.handleInputChange} 
                      handleSubmit={this.handleSubmit}
                      handleDistanceChange={this.handleDistanceChange}
                      handleDistanceSubmit={this.handleDistanceSubmit}
                      error={this.state.error} loading={this.state.loading} />)}
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

