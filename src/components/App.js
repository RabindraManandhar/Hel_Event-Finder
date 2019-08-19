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
      options: [],
      selectedOption: null
    }
    this.fetchAllEvents = this.fetchAllEvents.bind(this);
    this.fetchTaggedEvents = this.fetchTaggedEvents.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  fetchAllEvents() {
  fetch(encodeURI(`http://localhost:3030/api/events/?limit=1000`))
    .then(res => {
      if(res.ok) {
        return res.json();
      } else {
        throw new Error('Something went wrong...');
      }
    })
    .then(res => {
      //state.options populate
      // get event tag name in one array "eventTagNames"
      const eventTagNames = res.data
      .map(event => event.tags.map(tag => tag.name) );

      // flatten eventTagNames array
      const options = eventTagNames.reduce((flattenedArr, current) => {
        return flattenedArr.concat(current);
      }, []);
      
      // remove duplicate tag names
      let tagOptions = [];
      options.forEach(item => {
        if(tagOptions.indexOf(item) === -1){
          tagOptions.push(item);
        }
      });

      // create an object with value and label property from tag names array (tagOptions)
      tagOptions = tagOptions.map(item => ({value: item, label: item}));

      this.setState({
        loading: false,
        events: res.data,
        options: tagOptions
      });

      console.log(res.data);
    })
    .catch(error => this.setState({error, loading: false}));
  }

  fetchTaggedEvents() {
    fetch(encodeURI(`http://localhost:3030/api/events/?tags_search=${this.state.selectedOption.value}&limit=100`))
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Something went wrong...');
        }
      })
      .then(res => {
        this.setState({
          loading: false,
          events: res.data
        })
        console.log(res.data);
      })
      .catch(error => this.setState({error, loading: false}));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.fetchTaggedEvents();
  }


  handleChange(selectedOption) {
    this.setState({selectedOption: selectedOption}, () => {
      console.log(selectedOption);
      this.fetchTaggedEvents();
    });
  }


  componentDidMount() {
    this.fetchAllEvents();
  }

  render(){
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Switch>
            <Route exact path="/" 
                    render={(routeProps) => (<Home {...routeProps} 
                      apiData={this.state.events}
                      error={this.state.error}
                      loading={this.state.loading}/>)}
            />
            <Route path="/home" 
                    render={(routeProps) => (<Home {...routeProps}
                      apiData={this.state.events}
                      error={this.state.error}
                      loading={this.state.loading}/>)} 
            />
            <Route path="/events" 
                    render={(routeProps) => (<Events {...routeProps} 
                      apiData={this.state.events} 
                      options={this.state.options}
                      handleChange={this.handleChange} 
                      handleSubmit={this.handleSubmit}
                      error={this.state.error}
                      loading={this.state.loading} />)}
            />
            <Route path="/about"
                    render={(routeProps) => (<About {...routeProps}
                      apiData={this.state.events}
                      error={this.state.error}
                      loading={this.state.loading}/>)}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

