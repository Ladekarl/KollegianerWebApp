import React, { FC, useState, ChangeEvent } from 'react';
import {
    Container,
    Row,
    Col,
    NavLink,
    Card,
    CardHeader,
    Button,
    CardBody,
    Form,
    FormGroup,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Input,
} from 'reactstrap';
import { Translate, I18n } from 'react-redux-i18n';
import { getPath } from '../../../routes/routes';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { RootState, LoginModel } from 'GlobalTypes';
import { loginFacebookAsync, loginUserAsync } from '../loginActions';
import { Action } from 'typesafe-actions';
import { UserModel } from 'GlobalTypes';
import LoadingSpinner from '../../app/components/LoadingSpinner';

type DispatchProps = {
    loginFacebook: () => Action;
    loginUser: (login: LoginModel) => Action;
};

type StateProps = {
    isLoading: boolean;
    user: UserModel;
};

const mapStateToProps = (state: RootState): StateProps => ({
    isLoading: state.login.isLoading,
    user: state.login.user,
});

const mapDispatchToProps: DispatchProps = {
    loginFacebook: (): Action => loginFacebookAsync.request(),
    loginUser: (login: LoginModel): Action => loginUserAsync.request({ ...login }),
};

type Props = DispatchProps & StateProps;

const Login: FC<Props> = ({ loginFacebook, loginUser, isLoading, user }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLoginFacebookPressed = (): void => {
        loginFacebook();
    };

    const onLoginPressed = (): void => {
        loginUser({
            username: email,
            password,
        });
    };

    const onKeyPressLogin = (e: React.KeyboardEvent<HTMLDivElement>): void => {
        if (e.keyCode === 13 && email && email !== '' && password && password !== '') {
            onLoginPressed();
        }
    };

    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>): void => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePassword = (e: ChangeEvent<HTMLInputElement>): void => {
        const password = e.target.value;
        setPassword(password);
    };

    return (
        <section className="section section-lg section-shaped">
            <div className="shape shape-style-1 bg-gradient-white"></div>
            <Container className="lg-7">
                <Row className="justify-content-center">
                    <Col lg="5">
                        <Card className="bg-secondary shadow border-0">
                            <CardHeader className="bg-white pb-5">
                                <div className="text-muted text-center mb-3">
                                    <small>
                                        <Translate value="login.loginWith" />
                                    </small>
                                </div>
                                <div className="btn-wrapper text-center">
                                    <Button
                                        className="btn-neutral btn-icon ml-1"
                                        color="default"
                                        disabled={isLoading}
                                        onClick={onLoginFacebookPressed}
                                    >
                                        <span className="btn-inner--icon mr-1">
                                            <i className="fa fa-facebook-square" />
                                        </span>
                                        <span className="btn-inner--text">
                                            <Translate value="login.facebook" />
                                        </span>
                                    </Button>
                                </div>
                            </CardHeader>
                            <CardBody className="px-lg-5 py-lg-5">
                                {isLoading ? (
                                    <LoadingSpinner />
                                ) : (
                                    <>
                                        <div className="text-center text-muted mb-4">
                                            <small>
                                                <Translate value="login.useLoginInfo" />
                                            </small>
                                        </div>
                                        <Form role="form">
                                            <FormGroup className="mb-3" onKeyPress={onKeyPressLogin}>
                                                <InputGroup className="input-group-alternative">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="ni ni-email-83" />
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                        placeholder={I18n.t('login.email')}
                                                        type="email"
                                                        onChange={onChangeEmail}
                                                    />
                                                </InputGroup>
                                            </FormGroup>
                                            <FormGroup>
                                                <InputGroup className="input-group-alternative">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="ni ni-lock-circle-open" />
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                        placeholder={I18n.t('login.password')}
                                                        type="password"
                                                        autoComplete="off"
                                                        onChange={onChangePassword}
                                                    />
                                                </InputGroup>
                                            </FormGroup>
                                            <div className="text-center">
                                                <Button
                                                    className="my-4"
                                                    color="primary"
                                                    disabled={isLoading}
                                                    onClick={onLoginPressed}
                                                    type="button"
                                                >
                                                    <Translate value="login.login" />
                                                </Button>
                                            </div>
                                        </Form>
                                    </>
                                )}
                            </CardBody>
                        </Card>
                        <Row className="mt-3">
                            <Col xs="6">
                                <NavLink className="text-light" to={getPath('forgotPassword')} tag={Link}>
                                    <small>
                                        <Translate value="login.forgotPassword" />
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
    loginFacebook: PropTypes.func.isRequired,
    loginUser: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
