import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'reactstrap';
import { Link, Redirect, withRouter } from "react-router-dom";

import { connect } from 'react-redux';
import {
    addToCart,
    openCart,
    changeQuantity,
    removeProductInCart,
    cartsSelectors
} from '../../../state/ducks/carts';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTimesCircle from '@fortawesome/fontawesome-free-regular/faTimesCircle';

import './ShoppingCartModal.css';

const urlImage = 'assets/images/products/';

class ShoppingCartModal extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            products: [],
            totalPrice: '',
            selects: {}
        };
        this.remove = this.remove.bind(this);
        this.changeQuantity = this.changeQuantity.bind(this);
        this.checkout = this.checkout.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        nextProps.carts && this.getProducts(nextProps);
    }

    componentDidMount() {
        this.props.carts && this.getProducts(this.props);
    }

    async changeQuantity(event, product) {
        const id = product.id;
        const quantity = +event.target.value;
        if(!this.state.selects[id]) {
            this.state.selects[id] = [];
        }
        this.state.selects[id] = quantity;
        
        try{ 
            await this.props.changeQuantity(Object.assign(product, {quantity}));
            this.setState({
                selects: this.state.selects
            });
        }catch(error) {
            console.log(error);
        }
    }

    async remove(productId) {
        try {
            await this.props.removeProductInCart(productId);
            this.setState({
                products: [...this.props.carts],
                totalPrice: this.props.totalPrice
            });
        } catch (error) {
            console.log(error); 
        }
    }

    async checkout() {
        await this.props.openCart(false);
        this.props.history.push('/checkout');
        // return <Redirect to="/checkout" />
        // console.log(this.props);
        
    }

    getProducts(props) {
        const selects = {};
        for (let product of props.carts){
            selects[product.id] = [];
            selects[product.id] = product.quantity;
        }
        const products = props.carts.sort((a, b) => a.sort - b.sort);
        const totalPrice = props.totalPrice;
        this.setState({
            products,
            totalPrice,
            selects
        });
    }

    renderOption(quantity) {
        let items = [];
        for(let i = 1; i <= quantity; i++) {
            items = [...items, <option key={i} value={i}>{i}</option>]
        }
        return items;
    }

    renderProducts(products) {
       return products.map((product) =>
            <li key={product.id} >
                <div className="single-product">
                    <div className="thumb">
                        <a>
                            <img src={`${urlImage}${product.images[0]}`} alt="banner" />
                        </a>
                    </div>
                    <div className="details text-left">
                        <h2>
                            <a>
                                {product.title}
                            </a>
                        </h2>
                        <span className="d-block">
                            <span>{product.quantity}</span>
                            <span> x </span>
                           <span>{`$${product.newPrice}`}</span>
                        </span>
                        <div>
                            <div>Quantity: </div>
                            <Input
                                className="select-quantity w-25"
                                type="select"
                                name="quantity"
                                onChange={(e) => this.changeQuantity(e, product)}
                                value={this.state.selects[product.id]}
                            >
                                {
                                    this.renderOption(product.availableQuantity)
                                } 
                            </Input>
                        </div>
                        { product.isError &&
                            <span className="text-danger">Item has already reached max quantity</span>
                        }
                    </div>
                    <div className="remove">
                        <a onClick={() => this.remove(product.id)}>
                           <FontAwesomeIcon icon={faTimesCircle} size="1x"/>
                        </a>
                    </div>
                </div>
            </li>
        )
    }

    render() {
        return (
            <div className={`shopping-cart ${this.props.isShowModal && 'open'}`}>
                <div className="inner">
                    <div className="close-button">
                        <a onClick={() => this.props.openCartModal(false)}>
                            <FontAwesomeIcon icon={faTimesCircle} size="2x"/>
                        </a>
                    </div>
                    { this.state.products.length === 0 &&    
                        <div className="cart-empty-title">
                            <h2>Your cart is currently empty.</h2>
                        </div>
                    }
                    { this.state.products.length > 0 &&
                        <div>
                            <div className="cart-wrap">
                                <ul>
                                    {
                                        this.renderProducts(this.state.products)
                                    }
                                </ul>
                            </div>
                            
                            <div className="cart-total">
                                <span>Total:</span>
                                <span>{`$${this.state.totalPrice}`}</span>
                            </div>
                            <div className="cart-btn">
                                {/* <a>View Cart</a> */}
                                <a onClick={this.checkout} className="btn-checkout">Checkout</a>
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

const propTypes = {
    isShowModal: PropTypes.bool.isRequired,
    openCartModal: PropTypes.func.isRequired,
    carts: PropTypes.array.isRequired,
    totalPrice: PropTypes.number.isRequired,
    removeProductInCart: PropTypes.func.isRequired,
};

ShoppingCartModal.propTypes = propTypes;

export default connect(
    state => ({
        carts: cartsSelectors.getCarts(state),
        totalPrice: cartsSelectors.getTotal(state),
    }),{
        addToCart,
        openCart,
        changeQuantity,
        removeProductInCart,
        
    },
)(withRouter(ShoppingCartModal));
