import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    // Container,
    // Badge
} from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';

import './ShoppingCartModal.css';


class ShoppingCartModal extends Component {
    render() {
        return (
            <div className={`shopping-cart ${this.props.isShow && 'open'}`}>
                <div className="inner">
                    <div className="close-button">
                        <a onClick={this.props.recProp}>
                            <FontAwesomeIcon icon={faTimes} size="2x"/>
                        </a>
                    </div>
                    <div className="cart-empty-title">
                        <h2>Your cart is currently empty.</h2>
                    </div>
                    <div className="cart-wrap">
                        <ul>
                            <li>
                                <div className="single-product">
                                    <div className="thumb">
                                        <a>
                                            <img src="https://cdn.shopify.com/s/files/1/2508/8358/products/16_af000deb-7f2c-40c0-af34-6225fb7af5cd.jpg?v=1509598597" />
                                        </a>
                                    </div>
                                    <div className="details text-left">
                                        <h2>
                                            <a>
                                                Beautiful fita bag - xl / magenta / partex
                                            </a>
                                        </h2>
                                        <span className="d-block">
                                             1
                                            <span> x</span>
                                            <span> $80</span>
                                        </span>
                                    </div>
                                    <div className="remove">
                                        <a>
                                            <FontAwesomeIcon icon={faTimes} size="1x"/>
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="cart-total">
                        <span>Total:</span>
                        <span>$100</span>
                    </div>
                    <div className="cart-btn">
                        <a>View Cart</a>
                        <a className="checkout">Checkout</a>
                    </div>
                </div>
            </div>
        );
    }
}

const propTypes = {
    isShow: PropTypes.bool.isRequired,
    recProp: PropTypes.func.isRequired,
};

ShoppingCartModal.propTypes = propTypes;

export default ShoppingCartModal;
