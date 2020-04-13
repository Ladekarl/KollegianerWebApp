import { Card, CardHeader, CardBody } from 'reactstrap';
import React, { FC, useEffect } from 'react';
import { Translate } from 'react-redux-i18n';
import PropTypes from 'prop-types';
import { ActionCodeModel, RootAction } from 'GlobalTypes';
import LoadingSpinner from '../../app/components/LoadingSpinner';

type Props = {
    isLoading: boolean;
    actionCode: string;
    continueUrl: string;
    lang: string;
    verifyEmailAsync: (actionCodeModel: ActionCodeModel) => RootAction;
};

const VerifyEmailCard: FC<Props> = ({ isLoading, actionCode, verifyEmailAsync }) => {
    useEffect(() => {
        if (actionCode) {
            verifyEmailAsync({ actionCode });
        }
    }, [actionCode, verifyEmailAsync]);

    return (
        <Card className="bg-seconpdary shadow border-0">
            <CardHeader className="bg-white">
                <div className="text-muted text-center">
                    <small>
                        <Translate value="login.verifyEmail" />
                    </small>
                </div>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
                {isLoading ? (
                    <LoadingSpinner />
                ) : (
                    <div className="text-center text-muted mb-4">
                        <small>
                            <Translate value="login.emailVerified" />
                        </small>
                    </div>
                )}
            </CardBody>
        </Card>
    );
};

VerifyEmailCard.propTypes = {
    verifyEmailAsync: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    actionCode: PropTypes.string.isRequired,
    continueUrl: PropTypes.string.isRequired,
    lang: PropTypes.string.isRequired,
};

export default VerifyEmailCard;
