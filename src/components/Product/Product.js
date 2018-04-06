import React, {Component} from 'react';
import {
    Col
} from 'reactstrap';
import {Link} from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faShoppingCart from '@fortawesome/fontawesome-free-solid/faShoppingCart';
import faEye from '@fortawesome/fontawesome-free-solid/faEye';

import './Product.css';

class Product extends Component {
    render() {
        const {md, sm, xs} = this.props;
        return (
            <Col md={md} sm={sm} xs={xs} className="product-height">
                <div className="product mt-5">
                    <div className="product-inner">
                        <div className="pro-thumb">
                            <a className="d-block">
                                <img src="https://cdn.shopify.com/s/files/1/2300/9895/products/3_22b86be5-8d7b-4cbc-a2a2-c522bbfb46f4_grande.jpg?v=1505733074" alt="banner" />
                            </a>
                        </div>
                        <div className="product-to-info">
                            <ul className="action">
                                <li>
                                    <Link to="">
                                        <FontAwesomeIcon icon={faEye}/>
                                    </Link>
                                </li>
                                <li>
                                    <a>
                                        <FontAwesomeIcon icon={faShoppingCart}/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="product-details">
                        <h2>
                            <a>Smart head cap</a>
                        </h2>
                        <ul className="product-price">
                            <li className="new-price">
                                <span>$50.00</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </Col>
        );
    }
}


export default Product;
