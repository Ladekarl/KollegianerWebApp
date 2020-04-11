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
} from 'reactstrap';
import React, { ChangeEvent, FC, useState } from 'react';
import { Translate, I18n } from 'react-redux-i18n';
import { ResetPasswordModel } from 'GlobalTypes';
import PropTypes from 'prop-types';
import { Action } from 'typesafe-actions';

type Props = {
    isLoading: boolean;
    actionCode: string;
    lang: string;
    resetPassword: (resetPasswordModel: ResetPasswordModel) => Action;
};

const RecoverEmailCard: FC<Props> = (props) => {
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
        <Card className="bg-seconpdary shadow border-0">
            <CardHeader className="bg-white">
                <div className="text-muted text-center">
                    <small>
                        <Translate value="login.forgotPassword" />
                    </small>
                </div>
            </CardHeader>
            {emailSent ? (
                <CardBody className="px-lg-5 py-lg-5">
                    <div className="text-center text-muted mb-4">
                        <small>
                            <Translate value="login.passwordResetEmailSent" />
                        </small>
                    </div>
                </CardBody>
            ) : (
                <CardBody className="px-lg-5 py-lg-5">
                    <div className="text-center text-muted mb-4">
                        <small>
                            <Translate value="login.forgotPasswordTypeMail" />
                        </small>
                    </div>
                    <Form role="form">
                        <FormGroup className="mb-3">
                            <InputGroup className="input-group-alternative">
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <i className="ni ni-email-83" />
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input placeholder={I18n.t('login.email')} type="email" onChange={onChangeEmail} />
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
                </CardBody>
            )}
        </Card>
    );
};

RecoverEmailCard.propTypes = {
    resetPassword: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    actionCode: PropTypes.string.isRequired,
    lang: PropTypes.string.isRequired,
};

export default RecoverEmailCard;
