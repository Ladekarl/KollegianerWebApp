import React, { Component } from "react";
import {
    Button,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col,
    UncontrolledTooltip,
} from "reactstrap";
import { getPath } from "../../routes/routes";
import './Footer.scss';
import { Translate, setLocale } from "react-redux-i18n";
import { connect } from 'react-redux'
import { Link } from "react-router-dom";

const dispatchProps = {
    onChangeLocale: setLocale
};

type Props = typeof dispatchProps;

class Footer extends Component<Props> {

    changeLanguageEn = () => {
        this.props.onChangeLocale('en');
    };

    changeLanguageDa = () => {
        this.props.onChangeLocale('da');
    };

    render() {
        const danishFlag = require('../../assets/images/danish-flag.png')
        const americanFlag = require('../../assets/images/american-flag.png')

        return (
            <footer className="footer">
                <Container>
                    <Row className="align-items-center">
                        <Col md="3" className="justify-content-md-start justify-content-center d-flex">
                            <div className="copyright">
                                © {new Date().getFullYear()}{" "}
                                <Translate value="appName" />
                            </div>
                        </Col>
                        <Col md="3" className="justify-content-center d-flex">
                            <Button
                                className="btn-icon-only rounded-circle ml-1"
                                color="transparent"
                                onClick={this.changeLanguageDa}
                                id="daTooltip"
                                target="_blank">
                                <span className="btn-inner--icon">
                                    <img className="language-icon" src={danishFlag} alt="change to Danish" />
                                </span>
                            </Button>
                            <UncontrolledTooltip delay={0} target="daTooltip">
                                <Translate value="footer.daTooltip" />
                            </UncontrolledTooltip>
                            <Button
                                className="btn-icon-only rounded-circle ml-1"
                                color="transparent"
                                onClick={this.changeLanguageEn}
                                id="enTooltip"
                                target="_blank">
                                <span className="btn-inner--icon">
                                    <img className="language-icon" src={americanFlag} alt="change to english" />
                                </span>
                            </Button>
                            <UncontrolledTooltip delay={0} target="enTooltip">
                                <Translate value="footer.enTooltip" />
                            </UncontrolledTooltip>
                        </Col>
                        <Col md="3" className="justify-content-center">
                            <Nav className="nav-footer justify-content-center">
                                <NavItem>
                                    <NavLink to={getPath('aboutUs')} tag={Link}><Translate value="footer.aboutUs" /></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to={getPath('privacyPolicy')} tag={Link}><Translate value="footer.privacyPolicy" /></NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                        <Col md="3" className="justify-content-md-end justify-content-center d-flex">
                            <Button
                                className="btn-icon-only rounded-circle ml-1"
                                color="transparent"
                                href="https://www.facebook.com"
                                id="fbTooltip"
                                target="_blank">
                                <span className="btn-inner--icon">
                                    <i className="fa fa-facebook-square" />
                                </span>
                            </Button>
                            <UncontrolledTooltip delay={0} target="fbTooltip">
                                <Translate value="footer.fbTooltip" />
                            </UncontrolledTooltip>
                        </Col>
                    </Row>
                </Container>
            </footer >
        );
    }
}

export default connect(null, dispatchProps)(Footer);