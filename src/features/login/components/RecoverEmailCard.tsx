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
import React, { FC, useEffect, useState } from 'react';
import { Translate, I18n } from 'react-redux-i18n';
import PropTypes from 'prop-types';
import LoadingSpinner from '../../app/components/LoadingSpinner';
import { ActionCodeModel, EmailModel, RootAction } from 'GlobalTypes';

type Props = {
    isLoading: boolean;
    actionCode: string;
    lang: string;
    email: string | null;
    revokeEmailChangeAsync: (actionCodeModel: ActionCodeModel) => RootAction;
    resetPasswordAsync: (emailModel: EmailModel) => RootAction;
};

const RecoverEmailCard: FC<Props> = ({ isLoading, actionCode, email, revokeEmailChangeAsync, resetPasswordAsync }) => {
    const [emailSent, setEmailSent] = useState(false);

    useEffect(() => {
        if (actionCode) {
            revokeEmailChangeAsync({
                actionCode: actionCode,
            });
        }
    }, [actionCode, revokeEmailChangeAsync]);

    const onResetPasswordPressed = async (): Promise<void> => {
        if (email) {
            resetPasswordAsync({
                email,
            });
            setEmailSent(true);
        }
    };

    return (
        <Card className="bg-seconpdary shadow border-0">
            <CardHeader className="bg-white">
                <div className="text-muted text-center">
                    <small>
                        <Translate value="login.recoverEmail" />
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
                                {emailSent ? (
                                    <Translate value="login.passwordResetEmailSent" />
                                ) : (
                                    <Translate value="login.recoverEmailReverted" />
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
                                            className="pl-1"
                                            placeholder={I18n.t('login.email')}
                                            type="email"
                                            disabled={true}
                                            value={email || ''}
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
                        )}
                    </>
                )}
            </CardBody>
        </Card>
    );
};

RecoverEmailCard.propTypes = {
    revokeEmailChangeAsync: PropTypes.func.isRequired,
    resetPasswordAsync: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    actionCode: PropTypes.string.isRequired,
    lang: PropTypes.string.isRequired,
    email: PropTypes.string,
};

export default RecoverEmailCard;
