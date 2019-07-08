import React, { Component } from 'react';
import './Navigation.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';



export default class Navigation extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }

      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

    render() {
        return (
            <div>
                <Navbar className="navbar" color="dark" dark expand="md">
                    <NavbarBrand className="navbar-brand">
                        <NavLink className="navlink" href="/">Event-Finder</NavLink>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className="navlink" href="/home">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="navlink" href="/events">Events</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="navlink" href="/about">About Us</NavLink>
                            </NavItem>                            
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}