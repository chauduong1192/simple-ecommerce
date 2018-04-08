import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTimesCircle from '@fortawesome/fontawesome-free-regular/faTimesCircle';

import { connect } from 'react-redux';
import { removeProductInCart, cartsSelectors } from '../../../state/ducks/carts';

import './ShoppingCartModal.css';

const urlImage = 'assets/images/products/';

class ShoppingCartModal extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            products: [],
            isTotal: ''
        };
        this.remove = this.remove.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        nextProps.carts && this.getProducts(nextProps.carts);
    }

    componentDidMount() {
        this.props.carts && this.getProducts(this.props.carts);
    }

    async remove(productId) {
        try {
            await this.props.removeProductInCart(productId);
            this.setState({
                products: [...this.props.carts],
                isTotal: this.props.totalPrice
            });
        } catch (error) {
            console.log(error); 
        }
    }

    getProducts(products) {
        this.setState({
            products,
            isTotal: this.props.totalPrice
        });
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
            <div className={`shopping-cart ${this.props.isShow && 'open'}`}>
                <div className="inner">
                    <div className="close-button">
                        <a onClick={this.props.recProp}>
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
                                <span>{`$${this.state.isTotal}`}</span>
                            </div>
                            <div className="cart-btn">
                                {/* <a>View Cart</a> */}
                                <a className="btn-checkout">Checkout</a>
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

const propTypes = {
    isShow: PropTypes.bool.isRequired,
    recProp: PropTypes.func.isRequired,
    carts: PropTypes.array.isRequired,
    removeProductInCart: PropTypes.func.isRequired
};

ShoppingCartModal.propTypes = propTypes;

export default connect(
    state => ({
        carts: cartsSelectors.getCarts(state),
        totalPrice: cartsSelectors.getTotal(state),
    }),{
        removeProductInCart
    },
  )(ShoppingCartModal);
