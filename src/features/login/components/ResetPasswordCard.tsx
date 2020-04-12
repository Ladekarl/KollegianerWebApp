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
import React, { ChangeEvent, FC, useState, useEffect } from 'react';
import { Translate, I18n } from 'react-redux-i18n';
import { VerifyPasswordResetCodeModel, ConfirmPasswordResetModel } from 'GlobalTypes';
import PropTypes from 'prop-types';
import { Action } from 'typesafe-actions';
import LoadingSpinner from '../../app/components/LoadingSpinner';

type Props = {
    isLoading: boolean;
    email: string | null;
    actionCode: string;
    continueUrl: string;
    lang: string;
    verifyPasswordResetCodeAsync: (verifyPasswordResetCodeModel: VerifyPasswordResetCodeModel) => Action;
    confirmPasswordResetAsync: (confirmPasswordResetModel: ConfirmPasswordResetModel) => Action;
};

const ResetPasswordCard: FC<Props> = ({
    verifyPasswordResetCodeAsync,
    confirmPasswordResetAsync,
    actionCode,
    email,
    isLoading,
}) => {
    const [password, setPassword] = useState('');

    useEffect(() => {
        console.log(actionCode);
        verifyPasswordResetCodeAsync({
            actionCode: actionCode,
        });
    }, [actionCode, verifyPasswordResetCodeAsync]);

    const onChangePassword = (e: ChangeEvent<HTMLInputElement>): void => {
        const password = e.target.value;
        setPassword(password);
    };

    const onResetPasswordPressed = (): void => {
        if (email && password && !isLoading) {
            confirmPasswordResetAsync({
                newPassword: password,
                email: email,
                actionCode: actionCode,
            });
        }
    };

    return (
        <Card className="bg-seconpdary shadow border-0">
            <CardHeader className="bg-white">
                <div className="text-muted text-center">
                    <small>
                        <Translate value="login.resetPassword" />
                    </small>
                </div>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
                {isLoading ? (
                    <LoadingSpinner />
                ) : (
                    <>
                        <div className="text-center text-muted mb-4">
                            <small>
                                <Translate value="login.typeNewPassword" />
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
                                    <Input
                                        className="pl-1"
                                        placeholder={I18n.t('login.email')}
                                        type="email"
                                        disabled={true}
                                        value={email || ''}
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
                                        className="pl-1"
                                        placeholder={I18n.t('login.newPassword')}
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
                                    onClick={onResetPasswordPressed}
                                    type="button"
                                >
                                    <Translate value="login.resetPassword" />
                                </Button>
                            </div>
                        </Form>
                    </>
                )}
            </CardBody>
        </Card>
    );
};

ResetPasswordCard.propTypes = {
    verifyPasswordResetCodeAsync: PropTypes.func.isRequired,
    confirmPasswordResetAsync: PropTypes.func.isRequired,
    email: PropTypes.string,
    isLoading: PropTypes.bool.isRequired,
    actionCode: PropTypes.string.isRequired,
    continueUrl: PropTypes.string.isRequired,
    lang: PropTypes.string.isRequired,
};

export default ResetPasswordCard;
