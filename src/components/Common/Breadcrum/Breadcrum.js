import React from 'react';
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

export default Breadcrum;
