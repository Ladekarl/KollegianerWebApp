import React, { Component } from "react";
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
    NavLink
} from "reactstrap";
import './Login.scss';
import { Translate, I18n } from "react-redux-i18n";
import { getPath } from "../../../routes/routes";
import { Link } from "react-router-dom";
import { loginFacebookAsync, loginUserAsync } from '../loginActions';
import { LoginModel } from "GlobalTypes";
import { connect } from "react-redux";

const dispatchProps = {
    loginFacebook: () =>
        loginFacebookAsync.request(),
    loginUser: (login: LoginModel) =>
        loginUserAsync.request({
            ...login,
        })
};

type Props = typeof dispatchProps & {
    loginModel?: LoginModel;
};

class Login extends Component<Props> {

    render() {
        return (
            <section className="section section-lg section-shaped">
                <div className="shape shape-style-1 shape-default">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                </div>
                <Container className="lg-7">
                    <Row className="justify-content-center">
                        <Col lg="5">
                            <Card className="bg-secondary shadow border-0">
                                <CardHeader className="bg-white pb-5">
                                    <div className="text-muted text-center mb-3">
                                        <small><Translate value="login.loginWith" /></small>
                                    </div>
                                    <div className="btn-wrapper text-center">
                                        <Button
                                            className="btn-neutral btn-icon ml-1"
                                            color="default"
                                            onClick={this.props.loginFacebook}>
                                            <span className="btn-inner--icon mr-1">
                                                <i className="fa fa-facebook-square" />
                                            </span>
                                            <span className="btn-inner--text"><Translate value="login.facebook" /></span>
                                        </Button>
                                    </div>
                                </CardHeader>
                                <CardBody className="px-lg-5 py-lg-5">
                                    <div className="text-center text-muted mb-4">
                                        <small><Translate value="login.useLoginInfo" /></small>
                                    </div>
                                    <Form role="form">
                                        <FormGroup className="mb-3">
                                            <InputGroup className="input-group-alternative">
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="ni ni-email-83" />
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input placeholder={I18n.t('login.email')} type="email" />
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
                                                />
                                            </InputGroup>
                                        </FormGroup>
                                        <div className="custom-control custom-control-alternative custom-checkbox">
                                            <input
                                                className="custom-control-input"
                                                id=" customCheckLogin"
                                                type="checkbox"
                                            />
                                            <label
                                                className="custom-control-label"
                                                htmlFor=" customCheckLogin">
                                                <span><Translate value="login.rememberMe" /></span>
                                            </label>
                                        </div>
                                        <div className="text-center">
                                            <Button
                                                className="my-4"
                                                color="primary"
                                                type="button">
                                                <Translate value="login.login" />
                                            </Button>
                                        </div>
                                    </Form>
                                </CardBody>
                            </Card>
                            <Row className="mt-3">
                                <Col xs="6">
                                    <NavLink
                                        className="text-light"
                                        to={getPath('register')}
                                        tag={Link}>
                                        <small><Translate value="login.forgotPassword" /></small>
                                    </NavLink>
                                </Col>
                                <Col className="text-right" xs="6">
                                    <NavLink
                                        className="text-light"
                                        to={getPath('register')}
                                        tag={Link}>
                                        <small><Translate value="login.register" /></small>
                                    </NavLink>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default connect(null, dispatchProps)(Login);