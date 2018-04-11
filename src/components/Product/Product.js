import React from 'react';
import PropTypes from 'prop-types';
import {
    Col,
} from 'reactstrap';
import {Link} from 'react-router-dom';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faShoppingCart from '@fortawesome/fontawesome-free-solid/faShoppingCart';

const urlImage = 'assets/images/products/';

const Product = ({product, addToCart, ...rest}) => (
    <Col {...rest} className="product-height">
        <div className="product mt-5">
            <div className="product-inner">
                <div className="pro-thumb">
                    <Link to={`/products-detail/${product.slug}`} className="d-block">
                        <img src={`${urlImage}${product.images[0]}`} alt="banner" />
                    </Link>
                </div>
                { product.availableQuantity > 0 && 
                    <div className="add-to-cart-button">
                        <a onClick={addToCart}>
                            <FontAwesomeIcon icon={faShoppingCart}/> Add to cart
                        </a>
                    </div>
                }
                { product.availableQuantity < 3 && product.availableQuantity > 0 &&
                    <div className="few-left-overlay">
                        <span>Few Left</span>
                    </div>
                }
                { product.availableQuantity === 0 && 
                    <div className="sold-out-overlay">
                        <div className="sold-out-text">Sold Out</div>
                    </div>
                }
            </div>
            <div className="product-details">
                <h2>
                    <Link to={`/products-detail/${product.slug}`}>{product.title}</Link>
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

const propTypes = {
    product: PropTypes.object.isRequired,
    addToCart: PropTypes.func.isRequired,
    md: PropTypes.string.isRequired,
    sm: PropTypes.string.isRequired,
    xs: PropTypes.string.isRequired,
};

Product.propTypes = propTypes;

export default Product;
