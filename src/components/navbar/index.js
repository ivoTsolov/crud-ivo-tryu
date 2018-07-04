import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown
  } from 'reactstrap';
import {NavLink as Link} from 'react-router-dom';
export default class Example extends React.Component {
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
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">NEVERGRIM</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                  <NavLink tag={Link} to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink tag={Link} to="/blog">Blog</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink tag={Link} to="/about">About</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink tag={Link} to="/register">Registrer</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink tag={Link} to="/login">Login</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}