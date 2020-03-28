import React from "react";
import {
    Button,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col,
    UncontrolledTooltip
} from "reactstrap";
import Routes from "../../routes/Routes";
import './Footer.scss';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <Container>
                    <Row className="align-items-center">
                        <Col md="4" className="justify-content-md-start justify-content-center d-flex">
                            <div className="copyright">
                                © {new Date().getFullYear()}{" "}
                                SailMore.
                            </div>
                        </Col>
                        <Col md="4" className="justify-content-center">
                            <Nav className="nav-footer justify-content-center">
                                <NavItem>
                                    <NavLink href={Routes.OM_OS}>Om Os</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href={Routes.PRIVATLIVSPOLITIK}>Privatlivspolitik</NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                        <Col md="4" className="justify-content-md-end justify-content-center d-flex">
                            <Button
                                className="btn-icon-only rounded-circle ml-1"
                                color="transparent"
                                href="https://www.facebook.com/sailmore"
                                id="tooltip837440414"
                                target="_blank">
                                <span className="btn-inner--icon">
                                    <i className="fa fa-facebook-square" />
                                </span>
                            </Button>
                            <UncontrolledTooltip delay={0} target="tooltip837440414">
                                Like os
                            </UncontrolledTooltip>
                        </Col>
                    </Row>
                </Container>
            </footer >
        );
    }
}

export default Footer;