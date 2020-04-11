import React, { FC } from 'react';
import { Container, Row, Col, NavLink } from 'reactstrap';
import { Translate } from 'react-redux-i18n';
import { getPath } from '../../../routes/routes';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { RootState, ResetPasswordModel, VerifyPasswordResetCodeModel, ConfirmPasswordResetModel } from 'GlobalTypes';
import { resetPasswordAsync, verifyPasswordResetCodeAsync, confirmPasswordResetAsync } from '../loginActions';
import queryString from 'query-string';
import ResetPasswordCard from './ResetPasswordCard';
import RecoverEmailCard from './RecoverEmailCard';
import VerifyEmailCard from './VerifyEmailCard';
import { useHistory } from 'react-router-dom';
import { Action } from 'typesafe-actions';

type DispatchProps = {
    resetPassword: (resetPasswordModel: ResetPasswordModel) => Action;
    verifyPasswordResetCodeAsync: (verifyPasswordResetCodeModel: VerifyPasswordResetCodeModel) => Action;
    confirmPasswordResetAsync: (confirmPasswordResetModel: ConfirmPasswordResetModel) => Action;
};

type StateProps = {
    isLoading: boolean;
    email: string | null;
};

type Props = DispatchProps & StateProps;

const mapDispatchToProps: DispatchProps = {
    resetPassword: (resetPasswordModel: ResetPasswordModel): Action =>
        resetPasswordAsync.request({ ...resetPasswordModel }),
    verifyPasswordResetCodeAsync: (verifyPasswordResetCodeModel: VerifyPasswordResetCodeModel): Action =>
        verifyPasswordResetCodeAsync.request({ ...verifyPasswordResetCodeModel }),
    confirmPasswordResetAsync: (confirmPasswordResetModel: ConfirmPasswordResetModel): Action =>
        confirmPasswordResetAsync.request({ ...confirmPasswordResetModel }),
};

const mapStateToProps = (state: RootState): StateProps => ({
    isLoading: state.login.isLoading,
    email: state.login.resetPassword.email || null,
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
    resetPassword,
    verifyPasswordResetCodeAsync,
    confirmPasswordResetAsync,
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
            <RecoverEmailCard isLoading={isLoading} actionCode={oobCode} lang={lang} resetPassword={resetPassword} />
        );
    } else if (mode === 'verifyEmail') {
        content = (
            <VerifyEmailCard
                isLoading={isLoading}
                actionCode={oobCode}
                continueUrl={continueUrl}
                lang={lang}
                resetPassword={resetPassword}
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
    resetPassword: PropTypes.func.isRequired,
    verifyPasswordResetCodeAsync: PropTypes.func.isRequired,
    confirmPasswordResetAsync: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMgmt);
