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
import {Link, NavLink as NavRouter} from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faShoppingCart from '@fortawesome/fontawesome-free-solid/faShoppingCart';
import { connect } from 'react-redux';
import { cartsSelectors } from '../../../state/ducks/carts';

import ShoppingCartModal from '../ShoppingCartModal';

import { CategoryAPI } from '../../../services/api';
import { APP } from "../../../config";

import './Header.css';


class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            categories: [],
            isOpen: false,
            isShow: false,
            isCount : 0
        };

        this.recProp = this.recProp.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.getTotalQuantity);
        
        const isCount = nextProps.getTotalQuantity;
        this.setState({
            isCount
        })
    }

    async componentDidMount() {
        try {
            const categories = await CategoryAPI.getCategories();
            this.setState({
                categories
            })
        }catch(error) {
            console.log(error);
        }
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    recProp() {
        this.setState({
            isShow: false
        });
    }

    renderCategories(categories) {
        if(!categories.length) return;
        return categories.map((category) => 
            <NavItem key={category.id}>
                <NavRouter activeClassName="selected" className="nav-link" to={`/products/${category.slug}`}>{category.title}</NavRouter>
            </NavItem>
        )
    }

    render() {
        return (
            <div className="header">
                <Navbar light expand="md">
                    <Container>
                        <Link className="navbar-brand" to="/">{APP.name}</Link>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="mr-auto" navbar>
                            {
                                this.renderCategories(this.state.categories)
                            }
                            </Nav>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="cart-right" onClick={() => this.setState({isShow: true})}>
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
                <div className={`body-overlay ${this.state.isShow && 'is-visible'}`} onClick={() => this.setState({isShow: false})}></div>
                <ShoppingCartModal isShow={this.state.isShow}  recProp={this.recProp}/>
            </div>
        );
    }
}

export default connect(
    state => ({
        carts: cartsSelectors.getCarts(state),
        getTotalQuantity: cartsSelectors.getTotalQuantity(state),
    })
  )(Header);
// export default Header;

