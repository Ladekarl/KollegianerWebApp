import React, { FC } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import './LoadingSpinner.scss';
import PropTypes from 'prop-types';

type Props = typeof BeatLoader.defaultProps;

const LoadingSpinner: FC<Props> = (props) => {
    return (
        <div className="loading-spinner">
            <BeatLoader {...props} />
        </div>
    );
};

LoadingSpinner.propTypes = {
    size: PropTypes.number,
    color: PropTypes.string,
    loading: PropTypes.bool,
    css: PropTypes.any,
};

export default LoadingSpinner;
