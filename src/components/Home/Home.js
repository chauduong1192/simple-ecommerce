import React,{Component} from 'react';
import {
    Container,
    Row,
    Col
} from 'reactstrap';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart, cartsSelectors } from '../../state/ducks/carts';

import Product from '../Product'
import {home} from '../../services/mockData/home';

import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bestSellers: [],
            collections: [],
            bestProducts: []
        }
    }

    componentDidMount() {
        console.log(this.props);
        
        this.setState({
            bestSellers: home.bestSellers,
            collections: home.collections,
            bestProducts: home.bestProducts
        })
    }

    renderProducts(products) {
        if(!products.length) return;
        return products.map((product) => 
            <Product key={product.id} md="3" sm="6" xs="12" product={product} />
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
                        <span>{item.title}</span>
                    </div>
                </div>
            </Col>
        )
    }

    render() {
        return(
            <div className="home">
                <Container className="pb-5">
                    <Row>
                        <Col lg="5" md="5" sm="6" xs="12">
                            <div className="feature foo">
                                <div className="feature-thumb">
                                    <a>
                                        <img src="assets/images/comming/1.jpg" alt="banner1"/>
                                    </a>
                                </div>
                                <div className="feature-details">
                                    <h4>
                                        <a>Comming Soon ...</a>
                                    </h4>
                                    <div className="feature-btn">
                                        <a className="btn-shop-now" href="#" >Shop Now</a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg="7" md="7" sm="6" xs="12">
                            <Row>
                                <Col md="12" sm="12" xs="12">
                                    <div className="feature foo">
                                        <div className="feature-thumb">
                                            <a>
                                                <img src="assets/images/comming/2.jpg" alt="banner2"/>
                                            </a>
                                        </div>
                                        <div className="feature-details">
                                            <h4>
                                                <a>Lapm Collection</a>
                                            </h4>
                                            <div className="feature-btn">
                                                <a className="btn-shop-now" href="#" >Shop Now</a>
                                            </div>
                                        </div>
                                        {/* <div className="wrap-comming-soon"></div> */}
                                    </div>
                                </Col>
                                <Col md="5" sm="12" xs="12" className="hidden-sm hidden-xs mt-30">
                                    <div className="feature foo">
                                        <div className="feature-thumb">
                                            <a>
                                                <img src="https://cdn.shopify.com/s/files/1/2508/8384/files/banner-bag_1024x1024_6d408b7d-cc00-4231-91c8-d627f8581d36_1024x1024.jpg?v=1509771048" alt="banner" />
                                            </a>
                                        </div>
                                        <div className="feature-details">
                                            <h4>
                                                <a>Bag Collection</a>
                                            </h4>
                                            <div className="feature-btn">
                                                <a className="btn-shop-now" href="#" >Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="7" sm="12" xs="12" className="mt-30">
                                    <div className="feature foo">
                                        <div className="feature-thumb">
                                            <a>
                                                <img src="https://cdn.shopify.com/s/files/1/2508/8384/files/banner-watch_1024x1024_c2766b79-158c-4483-803a-800dbfed4c89_1024x1024.jpg?v=1509771061" alt="banner" />
                                            </a>
                                        </div>
                                        <div className="feature-details">
                                            <h4>
                                                <a>New Clock</a>
                                            </h4>
                                            <div className="feature-btn">
                                                <a className="btn-shop-now" href="#" >Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        
                    </Row>
                </Container>
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
                        {
                            this.renderProducts(this.state.bestProducts)
                        }                        
                    </Row>
                </Container>
            </div>
        );
    }
}

// export default Home;
export default connect(
    state => ({
        carts: cartsSelectors.getCarts(state),
    }), {
        addToCart,
    },
  )(Home);