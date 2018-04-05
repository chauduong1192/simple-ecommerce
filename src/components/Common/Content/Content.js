import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    children: PropTypes.any.isRequired,
};

const Content = ({ children }) => (
    <div className="content">
        {children}
    </div>
);

Content.propTypes = propTypes;

export default Content;