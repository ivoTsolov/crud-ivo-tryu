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
import { NavLink as Link } from 'react-router-dom';
import {connect} from 'react-redux';


 class Navigation extends React.Component {
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
                            <NavLink tag={Link} to="/">
                                Home
                            </NavLink>
                        </NavItem>
                        { this.props.logedIn && 
                        <NavItem>
                            <NavLink tag={Link} to="/admin">
                                Admin
                            </NavLink>
                        </NavItem>  
                        }

                        <NavItem>
                            <NavLink tag={Link} to="/about">
                                About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/weather">
                                Weather App
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/register">
                                Registrer
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/login">
                                Login
                            </NavLink>
                        </NavItem>
                        { this.props.logedIn && 
                        <NavItem>
                            <NavLink tag={Link} to="/logout">
                                Logout
                            </NavLink>
                        </NavItem>  
                        }
                        <UncontrolledDropdown nav inNavbar />
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

function mapStateToProps(state) {
    return {
        logedIn: state.posts.logedIn
    }
}

export default connect(
    mapStateToProps,
)(Navigation);