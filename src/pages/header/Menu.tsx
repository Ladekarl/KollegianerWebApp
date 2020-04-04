import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
    UncontrolledCollapse,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Row,
    Col
} from "reactstrap";
import { getPath } from "../../routes/routes";
import './Menu.scss';
import { Translate } from "react-redux-i18n";

type State = {
    collapseClasses: string,
    collapseOpen: boolean
}

class Menu extends Component<{}, State> {

    state = {
        collapseClasses: "",
        collapseOpen: false
    };

    openNavBar = () => {
        this.setState({
            collapseOpen: true
        });
    };

    closeNavBar = () => {
        this.setState({
            collapseOpen: false
        });
    };

    onTogglerPressed = () => {
        const prevCollapseOpen = this.state.collapseOpen;
        this.setState({
            collapseOpen: !prevCollapseOpen
        });
    }

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
                    <NavbarBrand className="mr-lg-5" to={getPath('home')} tag={Link}>
                        <img
                            alt="logo"
                            src={require("../../assets/images/kollegianerlogo.svg")}
                        />
                    </NavbarBrand>
                    <button className="navbar-toggler" id="navbar_global" onClick={this.openNavBar}>
                        <span className="navbar-toggler-icon" />
                    </button>
                    <UncontrolledCollapse
                        toggler="#navbar_global"
                        navbar
                        isOpen={this.state.collapseOpen}
                        className={this.state.collapseClasses}
                        onExiting={this.onExiting}
                        onExited={this.onExited}>
                        <div className="navbar-collapse-header">
                            <Row>
                                <Col className="collapse-brand" xs="6">
                                    <Link
                                        to={getPath('home')}
                                        onClick={this.closeNavBar}>
                                        <img
                                            alt="logo"
                                            src={require("../../assets/images/kollegianerlogo.svg")}
                                        />
                                    </Link>
                                </Col>
                                <Col className="collapse-close" xs="6">
                                    <button className="navbar-toggler" id="navbar_global" onClick={this.closeNavBar}>
                                        <span />
                                        <span />
                                    </button>
                                </Col>
                            </Row>
                        </div>
                        <Nav className="navbar-nav-hover align-items-lg-center justify-content-lg-end flex-lg-fill" navbar>
                            <NavItem>
                                <NavLink to={getPath('register')} tag={Link} onClick={this.closeNavBar}>
                                    <span className="nav-link-inner--text"><Translate value="menu.register" /></span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to={getPath('login')} tag={Link} onClick={this.closeNavBar}>
                                    <span className="nav-link-inner--text"><Translate value="menu.login" /></span>
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