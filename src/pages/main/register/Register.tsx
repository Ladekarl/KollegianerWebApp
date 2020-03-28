import React, { Component } from "react";

// reactstrap components
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
import Routes from "../../../routes/Routes";
import firebase from 'firebase/app';
import "firebase/auth";

type RegisterState = {
    name: string,
    email: string,
    password: string,
    acceptedPolicy: boolean
}

class Register extends Component<{}, RegisterState> {

    login = () => {

    }

    render() {
        return (
            <section className="section section-shaped">
                <Container className="lg-7">
                    <Row className="justify-content-center">
                        <Col lg="5">
                            <Card className="bg-secondary shadow border-0">
                                <CardHeader className="bg-white pb-5">
                                    <div className="text-muted text-center mb-3">
                                        <small>Opret gasteprofil med</small>
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
                                        <small>Eller opret en gasteprofil med dine oplysninger</small>
                                    </div>
                                    <Form role="form">
                                        <FormGroup>
                                            <InputGroup className="input-group-alternative mb-3">
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="ni ni-hat-3" />
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input placeholder="Navn" type="text" />
                                            </InputGroup>
                                        </FormGroup>
                                        <FormGroup>
                                            <InputGroup className="input-group-alternative mb-3">
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
                                        <Row className="my-4">
                                            <Col xs="12">
                                                <div className="custom-control custom-control-alternative custom-checkbox">
                                                    <input
                                                        className="custom-control-input"
                                                        id="customCheckRegister"
                                                        type="checkbox"
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        htmlFor="customCheckRegister"
                                                    >
                                                        <span>
                                                            Jeg er enig med{" "}
                                                            <a
                                                                href={Routes.PRIVATLIVSPOLITIK}
                                                            >
                                                                privatlivspolitikken
                                  </a>
                                                        </span>
                                                    </label>
                                                </div>
                                            </Col>
                                        </Row>
                                        <div className="text-center">
                                            <Button
                                                className="mt-4"
                                                color="primary"
                                                type="button"
                                            >
                                                Opret gasteprofil
                          </Button>
                                        </div>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Register;