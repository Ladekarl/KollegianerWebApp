/*!
=========================================================
* Argon Design System React - v1.1.0
=========================================================
* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)
* Coded by Creative Tim
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
    UncontrolledCollapse,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    UncontrolledDropdown,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Row,
    Col
} from "reactstrap";
import Routes from "../../routes/Routes";
import './Menu.scss';

class Menu extends React.Component {

    state = {
        collapseClasses: "",
        collapseOpen: false
    };

    onExiting = () => {
        this.setState({
            collapseClasses: "collapsing-out"
        });
    };

    onExited = () => {
        this.setState({
            collapseClasses: ""
        });
    };

    render() {
        return (
            <header className="header-global">
                <Navbar
                    className="navbar-main navbar-light"
                    expand="lg"
                    id="navbar-main">
                    <NavbarBrand className="mr-lg-5" to={Routes.FORSIDE} tag={Link}>
                        <img
                            alt="..."
                            src={require("../../assets/images/sailmorelogo.jpg")}
                        />
                    </NavbarBrand>
                    <button className="navbar-toggler" id="navbar_global">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <UncontrolledCollapse
                        toggler="#navbar_global"
                        navbar
                        className={this.state.collapseClasses}
                        onExiting={this.onExiting}
                        onExited={this.onExited}
                    >
                        <div className="navbar-collapse-header">
                            <Row>
                                <Col className="collapse-brand" xs="6">
                                    <Link to={Routes.FORSIDE}>
                                        <img
                                            alt="..."
                                            src={require("../../assets/images/sailmorelogo.jpg")}
                                        />
                                    </Link>
                                </Col>
                                <Col className="collapse-close" xs="6">
                                    <button className="navbar-toggler" id="navbar_global">
                                        <span />
                                        <span />
                                    </button>
                                </Col>
                            </Row>
                        </div>
                        <Nav className="navbar-nav-hover align-items-lg-center justify-content-lg-end flex-lg-fill" navbar>
                            <NavItem>
                                <NavLink to={Routes.ALLE_SEJLTOGTER} tag={Link}>
                                    <span className="nav-link-inner--text">Alle Sejltogter</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to={Routes.OPRET_GASTEPROFIL} tag={Link}>
                                    <span className="nav-link-inner--text">Opret Gasteprofil</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to={Routes.OPRET_SKIPPERPROFIL} tag={Link}>
                                    <span className="nav-link-inner--text">Opret Skipperprofil</span>
                                </NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav>
                                <DropdownToggle nav>
                                    <i className="fa fa-angle-down mr-1" />
                                    <span className="nav-link-inner--text">Hjælp</span>
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem to={Routes.VÆRD_AT_VIDE} tag={Link}>
                                        Værd at Vide</DropdownItem>
                                    <DropdownItem to={Routes.ØKONOMI} tag={Link}>
                                        Økonomi og Booking</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem>
                                <NavLink to={Routes.LOGIN} tag={Link}>
                                    <span className="nav-link-inner--text">Login</span>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </UncontrolledCollapse>
                </Navbar>
            </header>
        );
    }
}

export default Menu;