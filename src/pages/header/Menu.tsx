import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { UncontrolledCollapse, NavbarBrand, Navbar, NavItem, NavLink, Nav, Row, Col, Collapse } from 'reactstrap';
import { getPath } from '../../routes/routes';
import './Menu.scss';
import { Translate } from 'react-redux-i18n';

const Menu: FC = () => {
    const [collapseClasses, setCollapseClasses] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const onExiting = (): void => {
        setCollapseClasses('collapsing-out');
    };

    const onExited = (): void => {
        setCollapseClasses('');
    };

    const toggleNavBar = (): void => {
        setIsOpen(!isOpen);
    };

    const closeNavBar = (): void => {
        if (isOpen) {
            setIsOpen(false);
        }
    };

    return (
        <header className="header-global">
            <Navbar className="navbar-main navbar-light" expand="lg" id="navbar-main">
                <NavbarBrand className="mr-lg-5" to={getPath('home')} tag={Link}>
                    <img alt="logo" src={require('../../assets/images/kollegianerlogo.svg')} />
                </NavbarBrand>
                <button className="navbar-toggler" onClick={toggleNavBar}>
                    <span className="navbar-toggler-icon" />
                </button>
                <Collapse navbar isOpen={isOpen} className={collapseClasses} onExiting={onExiting} onExited={onExited}>
                    <div className="navbar-collapse-header">
                        <Row>
                            <Col className="collapse-brand" xs="6">
                                <Link id="navbar_global" to={getPath('home')} onClick={closeNavBar}>
                                    <img alt="logo" src={require('../../assets/images/kollegianerlogo.svg')} />
                                </Link>
                            </Col>
                            <Col className="collapse-close" xs="6">
                                <button className="navbar-toggler" onClick={toggleNavBar}>
                                    <span />
                                    <span />
                                </button>
                            </Col>
                        </Row>
                    </div>
                    <Nav className="navbar-nav-hover align-items-lg-center justify-content-lg-end flex-lg-fill" navbar>
                        <NavItem>
                            <NavLink to={getPath('register')} tag={Link} onClick={closeNavBar}>
                                <span className="nav-link-inner--text">
                                    <Translate value="menu.register" />
                                </span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to={getPath('login')} tag={Link} onClick={closeNavBar}>
                                <span className="nav-link-inner--text">
                                    <Translate value="menu.login" />
                                </span>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </header>
    );
};

export default Menu;
