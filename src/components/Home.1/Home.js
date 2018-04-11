import React,{Component} from 'react';
import {
    Container,
    Row,
    Col
} from 'reactstrap';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart, cartsSelectors } from '../../state/ducks/carts';

import ProductContainer from '../Product'
import {home} from '../../services/mockData/home';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faAngleLeft from '@fortawesome/fontawesome-free-solid/faAngleLeft';
import faAngleRight from '@fortawesome/fontawesome-free-solid/faAngleRight';

import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bestSellers: [],
            collections: [],
            bestProducts: []
        }

        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        this.setState({
            bestSellers: home.bestSellers,
            collections: home.collections,
            bestProducts: home.bestProducts
        })
    }

    handleScroll(type) {                
        let wrap = document.getElementsByClassName('wrap-carousel')[0].scrollLeft;
        document.getElementsByClassName('wrap-carousel')[0].scrollLeft = type ? (wrap + 285) : (wrap - 285);
        
    }

    renderProducts(products) {
        if(!products.length) return;
        return products.map((product) =>
            <ProductContainer key={product.id} md="3" sm="6" xs="12" product={product} />
        )
    }

    renderBestSeller(items) {
        if(!items.length) return;
        return items.map((item) => 
            <Col key={item.id} md="6" sm="12" xs="12" className="pb-4 mt-5">
                <div className="new-product">
                    <div className="new-product-thumb">
                        <Link to={`/products/${item.slug}`}>
                            <img src={item.image} alt="banner" />
                        </Link>
                    </div>
                    <div className="details">
                        <Link to={`/products/${item.slug}`}>{item.title}</Link>
                    </div>
                </div>
            </Col>
        )
    }

    render() {
        return(
            <div className="home">
                <Container className="best-seller">
                    <Row>
                        <Col xs="12">
                            <div className="title text-center">
                                <h2>Best Seller</h2>
                            </div>
                        </Col>
                        {
                            this.renderBestSeller(this.state.bestSellers)
                        }
                    </Row>
                </Container>
                <Container className="best-product">
                    <Row>
                        <Col xs="12">
                            <div className="title text-center">
                                <h2>Best Product</h2>
                            </div>
                        </Col>
                            <div className="products-carousel mb-5">
                                <div className="wrap-carousel">
                                    {
                                        this.renderProducts(this.state.bestProducts)
                                    }
                                </div>
                                <div className="arrow-left">
                                    <a onClick={() => this.handleScroll(0)}>
                                        <FontAwesomeIcon icon={faAngleLeft} size="3x"/>
                                    </a>
                                </div>
                                <div className="arrow-right">
                                    <a onClick={() => this.handleScroll(1)}>
                                        <FontAwesomeIcon icon={faAngleRight} size="3x"/>
                                    </a>
                                </div>
                            </div>                                               
                    </Row>
                </Container>
            </div>
        );
    }
}

export default connect(
    state => ({
        carts: cartsSelectors.getCarts(state),
    }), {
        addToCart,
    },
)(Home);
