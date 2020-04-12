import {
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
    Container,
    Row,
    Col,
    NavLink,
} from 'reactstrap';
import React, { ChangeEvent, FC, useState } from 'react';
import { Translate, I18n } from 'react-redux-i18n';
import { RootState, ResetPasswordModel } from 'GlobalTypes';
import { resetPasswordAsync } from '../loginActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPath } from '../../../routes/routes';
import { Link } from 'react-router-dom';
import { Action } from 'typesafe-actions';

type StateProps = {
    isLoading: boolean;
};

type DispatchProps = {
    resetPassword: (resetPasswordModel: ResetPasswordModel) => Action;
};

const mapStateToProps = (state: RootState): StateProps => ({
    isLoading: state.login.isLoading,
});

const dispatchProps: DispatchProps = {
    resetPassword: (resetPasswordModel: ResetPasswordModel): Action =>
        resetPasswordAsync.request({ ...resetPasswordModel }),
};

type Props = StateProps & DispatchProps;

const ForgotPassword: FC<Props> = (props) => {
    const [email, setEmail] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const onResetPasswordPressed = async (): Promise<void> => {
        props.resetPassword({
            email,
        });
        setEmailSent(true);
    };

    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>): void => {
        const email = e.target.value;
        setEmail(email);
    };

    return (
        <section className="section section-lg section-shaped">
            <div className="shape shape-style-1 bg-gradient-white"></div>
            <Container className="lg-7">
                <Row className="justify-content-center">
                    <Col lg="5">
                        <Card className="bg-seconpdary shadow border-0">
                            <CardHeader className="bg-white">
                                <div className="text-muted text-center">
                                    <small>
                                        <Translate value="login.forgotPassword" />
                                    </small>
                                </div>
                            </CardHeader>
                            <CardBody className="px-lg-5 py-lg-5">
                                <div className="text-center text-muted mb-4">
                                    <small>
                                        {emailSent ? (
                                            <Translate value="login.passwordResetEmailSent" />
                                        ) : (
                                            <Translate value="login.forgotPasswordTypeMail" />
                                        )}
                                    </small>
                                </div>
                                {!emailSent && (
                                    <Form role="form">
                                        <FormGroup className="mb-3">
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
                                        <div className="text-center">
                                            <Button
                                                className="my-4"
                                                color="primary"
                                                disabled={props.isLoading}
                                                onClick={onResetPasswordPressed}
                                                type="button"
                                            >
                                                <Translate value="login.resetPassword" />
                                            </Button>
                                        </div>
                                    </Form>
                                )}
                            </CardBody>
                        </Card>
                        <Row className="mt-3">
                            <Col xs="6">
                                <NavLink className="text-light" to={getPath('login')} tag={Link}>
                                    <small>
                                        <Translate value="login.backToLogin" />
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

ForgotPassword.propTypes = {
    resetPassword: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, dispatchProps)(ForgotPassword);
