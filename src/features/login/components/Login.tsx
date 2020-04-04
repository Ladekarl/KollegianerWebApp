import React, { FC } from 'react';
import { Container, Row, Col, NavLink } from 'reactstrap';
import './Login.scss';
import { Translate } from 'react-redux-i18n';
import { getPath } from '../../../routes/routes';
import { Link } from 'react-router-dom';
import LoginCard from './LoginCard';
import ForgotPasswordCard from './ForgotPasswordCard';
import PropTypes from 'prop-types';

interface Props {
    forgotPassword?: boolean;
}

const Login: FC<Props> = ({ forgotPassword = false }) => {
    return (
        <section className="section section-lg section-shaped">
            <div className="shape shape-style-1 bg-gradient-white"></div>
            <Container className="lg-7">
                <Row className="justify-content-center">
                    <Col lg="5">
                        {forgotPassword ? <ForgotPasswordCard /> : <LoginCard />}
                        <Row className="mt-3">
                            <Col xs="6">
                                <NavLink
                                    className="text-light"
                                    to={forgotPassword ? getPath('login') : getPath('forgotPassword')}
                                    tag={Link}
                                >
                                    <small>
                                        {forgotPassword ? (
                                            <Translate value="login.backToLogin" />
                                        ) : (
                                            <Translate value="login.forgotPassword" />
                                        )}
                                    </small>
                                </NavLink>
                            </Col>
                            <Col className="text-right" xs="6">
                                <NavLink className="text-light" to={getPath('register')} tag={Link}>
                                    <small>
                                        <Translate value="login.register" />
                                    </small>
                                </NavLink>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
Login.propTypes = {
    forgotPassword: PropTypes.bool,
};

export default Login;
