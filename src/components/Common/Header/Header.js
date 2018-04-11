import React, {Component} from 'react';
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
import { openCart, cartsSelectors } from '../../../state/ducks/carts';

import ShoppingCartModal from '../ShoppingCartModal';

import { APP } from "../../../config";

import './Header.css';


class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            // categories: [],
            isOpen: false,
            isCount : 0,
            isShowModal: false
        };
        this.openCartModal = this.openCartModal.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        const isCount = nextProps.getTotalQuantity;
        const isShowModal = nextProps.getIsModal;
        this.setState({
            isCount,
            isShowModal
        })
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    async openCartModal(bool) {
        await this.props.openCart(bool);
        this.setState({
            isShowModal: this.props.getIsModal
        });
    }

    render() {
        return (
            <div className="header">
                <Navbar light expand="md">
                    <Container>
                        <Link className="navbar-brand" to="/">{APP.name}</Link>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
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
                        </Collapse>
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

export default connect(
    state => ({
        carts: cartsSelectors.getCarts(state),
        getTotalQuantity: cartsSelectors.getTotalQuantity(state),
        getIsModal: cartsSelectors.getIsModal(state),
    }), {
        openCart
    }
)(Header);
