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
    Col
} from "reactstrap";
import Background from '../../../components/Background';

type LoginState = {
}

class Login extends Component<{}, LoginState> {

    render() {
        const background = require("../../../assets/images/backgrounds/ror.jpg");
        
        return (
            <section className="section section-shaped">
                <Background background={background} height="45%" />
                <Container className="lg-7">
                    <Row className="justify-content-center">
                        <Col lg="5">
                            <Card className="bg-secondary shadow border-0">
                                <CardHeader className="bg-white pb-5">
                                    <div className="text-muted text-center mb-3">
                                        <small>Log ind med </small>
                                    </div>
                                    <div className="btn-wrapper text-center">
                                        <Button
                                            className="btn-neutral btn-icon ml-1"
                                            color="default"
                                            href="#fblogin"
                                            onClick={e => e.preventDefault()}
                                        >
                                            <span className="btn-inner--icon mr-1">
                                                <i className="fa fa-facebook-square" />
                                            </span>
                                            <span className="btn-inner--text">Facebook</span>
                                        </Button>
                                    </div>
                                </CardHeader>
                                <CardBody className="px-lg-5 py-lg-5">
                                    <div className="text-center text-muted mb-4">
                                        <small>Eller brug dine loginoplysninger</small>
                                    </div>
                                    <Form role="form">
                                        <FormGroup className="mb-3">
                                            <InputGroup className="input-group-alternative">
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="ni ni-email-83" />
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input placeholder="Email" type="email" />
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
                                                    placeholder="Kodeord"
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
                                                htmlFor=" customCheckLogin"
                                            >
                                                <span>Husk mig</span>
                                            </label>
                                        </div>
                                        <div className="text-center">
                                            <Button
                                                className="my-4"
                                                color="primary"
                                                type="button"
                                            >
                                                Log ind
                          </Button>
                                        </div>
                                    </Form>
                                </CardBody>
                            </Card>
                            <Row className="mt-3">
                                <Col xs="6">
                                    <a
                                        className="text-light"
                                        href="#pablo"
                                        onClick={e => e.preventDefault()}
                                    >
                                        <small>Glemt kodeord?</small>
                                    </a>
                                </Col>
                                <Col className="text-right" xs="6">
                                    <a
                                        className="text-light"
                                        href="#pablo"
                                        onClick={e => e.preventDefault()}
                                    >
                                        <small>Opret ny skipperprofil</small>
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Login;
