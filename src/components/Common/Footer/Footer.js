import React from 'react';
import {
    Container,
    Row
} from 'reactstrap';
import { APP } from "../../../config";

import './Footer.css';

const Footer = () => (
    <footer className="footer" >
        <Container>
            <Row>
                <div>
                    © {APP.year} All rights reserved
                </div>
                <div>
                    Made with <i style={{color: '#f96868'}} className="fa fa-heart"></i> by <a target="_blank" href={APP.author.github}>{APP.author.name}</a>
                </div>
            </Row>
        </Container>
    </footer>
);

export default Footer;
