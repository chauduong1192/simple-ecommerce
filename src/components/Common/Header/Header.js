import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    Badge
} from 'reactstrap';
import {Link} from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faShoppingCart from '@fortawesome/fontawesome-free-solid/faShoppingCart';
import { connect } from 'react-redux';
import {
    openCart,
    addLocalDataToCart,
    cartsSelectors
} from '../../../state/ducks/carts';

import ShoppingCartModal from '../ShoppingCartModal';

import { APP } from "../../../config";

import './Header.css';


class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            isCount : 0,
            isShowModal: false,
        };
        this.openCartModal = this.openCartModal.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        const isCount = nextProps.getTotalQuantity;
        const isShowModal = nextProps.getIsModal;
        this.setState({
            isCount,
            isShowModal,
        })
    }

    async componentDidMount() {
        const products = localStorage.getItem("products-in-cart") && JSON.parse(localStorage.getItem("products-in-cart"));
        if(products) {
            await this.props.addLocalDataToCart(products);
            console.log(this.props);
            
        }
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    async openCartModal(bool) {
        await this.props.openCart(bool);
        this.setState({
            isShowModal: this.props.getIsModal,
        });
    }

    render() {
        return (
            <div className="header">
                <Navbar light expand="md">
                    <Container>
                        <Link className="navbar-brand" to="/">{APP.name}</Link>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink className="cart-right" onClick={() => this.openCartModal(true)}>
                                        <FontAwesomeIcon icon={faShoppingCart} size="lg"/>
                                        {this.state.isCount > 0 &&
                                            <Badge color="danger">{this.state.isCount}</Badge>
                                        }
                                    </NavLink>
                                </NavItem>
                            </Nav>
                    </Container>
                </Navbar>
                <div className={`body-overlay ${this.state.isShowModal && 'is-visible'}`} onClick={() => this.openCartModal(false)}></div>
                <ShoppingCartModal
                    isShowModal={this.state.isShowModal}
                    openCartModal={this.openCartModal}
                />
            </div>
        );
    }
}

const propTypes = {
    carts: PropTypes.array.isRequired,
    getTotalQuantity: PropTypes.number.isRequired,
    getIsModal: PropTypes.bool.isRequired,
    openCart: PropTypes.func.isRequired,
    addLocalDataToCart: PropTypes.func.isRequired,
};

Header.propTypes = propTypes;

export default connect(
    state => ({
        carts: cartsSelectors.getCarts(state),
        getTotalQuantity: cartsSelectors.getTotalQuantity(state),
        getIsModal: cartsSelectors.getIsModal(state),
    }), {
        openCart,
        addLocalDataToCart,
    }
)(Header);
