import React from 'react';
import {
    Container,
    Row,
    Col
} from 'reactstrap';

import Product from '../Product'
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faShoppingCart from '@fortawesome/fontawesome-free-solid/faShoppingCart';
import faPlus from '@fortawesome/fontawesome-free-solid/faPlus';

import './Home.css';

const Home = () => (
    <div className="home">
        <Container className="pb-5">
            <Row>
                <Col lg="5" md="5" sm="6" xs="12">
                    <div className="feature foo">
                        <div className="feature-thumb">
                            <a>
                                <img src="https://cdn.shopify.com/s/files/1/2508/8384/files/1_1024x1024_e0b7779d-b7d6-4bf3-ac37-08d474301499_1024x1024.jpg?v=1509771018" alt="banner"/>
                            </a>
                        </div>
                        <div className="feature-details">
                            <h4>
                                <a>New Products</a>
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
                                        <img src="https://cdn.shopify.com/s/files/1/2508/8384/files/2_1024x1024_f9fffcf4-d56e-4f01-8e44-9dc977014471_1024x1024.jpg?v=1509771033" alt="banner" />
                                    </a>
                                </div>
                                <div className="feature-details">
                                    <h4>
                                        <a>Lastest Lamp</a>
                                    </h4>
                                    <div className="feature-btn">
                                        <a className="btn-shop-now" href="#" >Shop Now</a>
                                    </div>
                                </div>
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
                <Col md="6" sm="12" xs="12" className="pb-4 mt-5">
                    <div className="new-product">
                        <div className="new-product-thumb">
                            <a>
                                <img src=" https://cdn.shopify.com/s/files/1/2508/8358/files/1_1024x1024.jpg?v=1509612262" alt="banner" />
                            </a>
                        </div>
                    </div>
                    <div className="new-product-details">
                        <h2>
                            <a>Funiture Collection</a>
                        </h2>
                        <div className="new-product-btn">
                            <a className="btn-shop-now">
                                Shop Now
                            </a>
                        </div>
                    </div>
                </Col>
                <Col md="6" sm="12" xs="12" className="pb-4 mt-5">
                    <div className="new-product">
                        <div className="new-product-thumb">
                            <a>
                                <img src=" https://cdn.shopify.com/s/files/1/2508/8358/files/2_6c66c4d6-85c3-46d0-95ab-3789b570933e_1024x1024.jpg?v=1509612302" alt="banner" />
                            </a>
                        </div>
                    </div>
                    <div className="new-product-details">
                        <h2>
                            <a>Funiture Collection</a>
                        </h2>
                        <div className="new-product-btn">
                            <a className="btn-shop-now">
                                Shop Now
                            </a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        <Container className="best-product">
            <Row>
                <Col xs="12">
                    <div className="title text-center">
                        <h2>Best Product</h2>
                    </div>
                </Col>
                <Product md="3" sm="6" xs="12" />
                <Product md="3" sm="6" xs="12" />
                
            </Row>
        </Container>
    </div>
);

export default Home;
