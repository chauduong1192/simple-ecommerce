import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Breadcrum.css';

const Breadcrum = ({url}) => (
    <ul className="breadcrum">
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <span className="text-capitalize">{url.split('/')[1]}</span>
        </li>
    </ul>
)

const propTypes = {
    url: PropTypes.string.isRequired,
};

Breadcrum.propTypes = propTypes;

export default Breadcrum;
