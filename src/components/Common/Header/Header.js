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
            isShow: false
        };

        this.recProp = this.recProp.bind(this);
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
                <Link className="nav-link" to={`/products/${category.slug}`}>{category.title}</Link>
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
                                        <Badge color="danger">4</Badge>
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

export default Header;
