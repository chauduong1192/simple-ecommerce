import React, {Component} from 'react';
import {
    Col
} from 'reactstrap';
import {Link} from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faShoppingCart from '@fortawesome/fontawesome-free-solid/faShoppingCart';
import faEye from '@fortawesome/fontawesome-free-solid/faEye';

import './Product.css';

const Product = ({product, ...rest}) => (
    <Col {...rest} className="product-height">
                <div className="product mt-5">
                    <div className="product-inner">
                        <div className="pro-thumb">
                            <a className="d-block">
                                <img src={product.image} alt="banner" />
                            </a>
                        </div>
                        <div className="product-to-info">
                            <ul className="action">
                                <li>
                                    <Link to={`/products-detail/${product.slug}`}>
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
                            <a>{product.title}</a>
                        </h2>
                        <ul className="product-price">
                            <li className="old-price">
                                <span>{`$${product.oldPrice}.00`}</span>
                            </li>
                            <li className="new-price">
                                <span>{`$${product.newPrice}.00`}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </Col>
);

export default Product;
