import React, { FC } from 'react';
import { Container, Row, Col, NavLink } from 'reactstrap';
import { Translate } from 'react-redux-i18n';
import { getPath } from '../../../routes/routes';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { EmailModel, ConfirmPasswordResetModel, ActionCodeModel, RootState, RootAction } from 'GlobalTypes';
import {
    resetPasswordAsync,
    verifyPasswordResetCodeAsync,
    confirmPasswordResetAsync,
    revokeEmailChangeAsync,
    verifyEmailAsync,
} from '../loginActions';
import queryString from 'query-string';
import ResetPasswordCard from './ResetPasswordCard';
import RecoverEmailCard from './RecoverEmailCard';
import VerifyEmailCard from './VerifyEmailCard';
import { useHistory } from 'react-router-dom';

type DispatchProps = {
    resetPasswordAsync: (emailModel: EmailModel) => RootAction;
    verifyPasswordResetCodeAsync: (actionCodeModel: ActionCodeModel) => RootAction;
    confirmPasswordResetAsync: (confirmPasswordResetModel: ConfirmPasswordResetModel) => RootAction;
    revokeEmailChangeAsync: (actionCodeModel: ActionCodeModel) => RootAction;
    verifyEmailAsync: (actionCodeModel: ActionCodeModel) => RootAction;
};

type StateProps = {
    isLoading: boolean;
    email: string | null;
};

type Props = DispatchProps & StateProps;

const mapDispatchToProps: DispatchProps = {
    resetPasswordAsync: (emailModel: EmailModel): RootAction => resetPasswordAsync.request({ ...emailModel }),
    verifyPasswordResetCodeAsync: (actionCodeModel: ActionCodeModel): RootAction =>
        verifyPasswordResetCodeAsync.request({ ...actionCodeModel }),
    confirmPasswordResetAsync: (confirmPasswordResetModel: ConfirmPasswordResetModel): RootAction =>
        confirmPasswordResetAsync.request({ ...confirmPasswordResetModel }),
    revokeEmailChangeAsync: (actionCodeModel: ActionCodeModel): RootAction =>
        revokeEmailChangeAsync.request({ ...actionCodeModel }),
    verifyEmailAsync: (actionCodeModel: ActionCodeModel): RootAction =>
        verifyEmailAsync.request({ ...actionCodeModel }),
};

const mapStateToProps = (state: RootState): StateProps => ({
    isLoading: state.login.isLoading,
    email: state.login.email.email || null,
});

type FirebaseEmailActionHandlerParams = {
    mode: string;
    oobCode: string;
    apiKey: string;
    continueUrl: string;
    lang: string;
};

const UserMgmt: FC<Props> = ({
    isLoading,
    email,
    resetPasswordAsync,
    verifyPasswordResetCodeAsync,
    confirmPasswordResetAsync,
    revokeEmailChangeAsync,
    verifyEmailAsync,
}) => {
    let content;
    const history = useHistory();
    const { mode, oobCode, continueUrl, lang } = queryString.parse(
        history.location.search,
    ) as FirebaseEmailActionHandlerParams;

    if (mode === 'resetPassword') {
        content = (
            <ResetPasswordCard
                isLoading={isLoading}
                email={email}
                actionCode={oobCode}
                continueUrl={continueUrl}
                lang={lang}
                verifyPasswordResetCodeAsync={verifyPasswordResetCodeAsync}
                confirmPasswordResetAsync={confirmPasswordResetAsync}
            />
        );
    } else if (mode === 'recoverEmail') {
        content = (
            <RecoverEmailCard
                isLoading={isLoading}
                actionCode={oobCode}
                lang={lang}
                email={email}
                resetPasswordAsync={resetPasswordAsync}
                revokeEmailChangeAsync={revokeEmailChangeAsync}
            />
        );
    } else if (mode === 'verifyEmail') {
        content = (
            <VerifyEmailCard
                isLoading={isLoading}
                actionCode={oobCode}
                continueUrl={continueUrl}
                lang={lang}
                verifyEmailAsync={verifyEmailAsync}
            />
        );
    } else {
        history.push(getPath('login'));
    }

    return (
        <section className="section section-lg section-shaped">
            <div className="shape shape-style-1 bg-gradient-white"></div>
            <Container className="lg-7">
                <Row className="justify-content-center">
                    <Col lg="5">
                        {content}
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

UserMgmt.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    email: PropTypes.string,
    resetPasswordAsync: PropTypes.func.isRequired,
    verifyPasswordResetCodeAsync: PropTypes.func.isRequired,
    confirmPasswordResetAsync: PropTypes.func.isRequired,
    revokeEmailChangeAsync: PropTypes.func.isRequired,
    verifyEmailAsync: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMgmt);
