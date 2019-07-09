import React, { Component } from 'react'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
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
                    isLoaded: true,
                    events: res.data
                });
                // console.log(res.data);
            },
            // Note: It's important to handle errors here 
            // instead of a catch() block so that we don't
            // swallow exceptions from actual bugs in components.

            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }

            )
    }


    render() {
        const {error, isLoaded} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <h1>Home Page</h1>
            )
        }
    }
}