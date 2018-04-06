import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
  Button
} from 'reactstrap';
import Product from '../Product';

import './ProductDetails.css';

class ProductDetails extends Component {
  render() {
    console.log(this.props);
    return(
      <Container className="product-details">
        <Row>
          <Col md="12" sm="12">
            {/* Breadrum */}
          </Col>
          <Col md="8" sm="12" xs="12">
            <div className="d-flex product-detail-left">
              <ul className="product-small-image">
                <li className="pot-small-img">
                  <a className="d-block">
                    <img className="w-100" src="https://cdn.shopify.com/s/files/1/2508/8358/products/26_e5283375-8a77-4668-a10a-66bce2950d4c_compact.jpg?v=1509598488"/>
                  </a>
                </li>
                <li className="pot-small-img">
                  <a className="d-block">
                    <img className="w-100" src="https://cdn.shopify.com/s/files/1/2508/8358/products/26_e5283375-8a77-4668-a10a-66bce2950d4c_compact.jpg?v=1509598488"/>
                  </a>
                </li>
                <li className="pot-small-img">
                  <a className="d-block">
                    <img className="w-100" src="https://cdn.shopify.com/s/files/1/2508/8358/products/26_e5283375-8a77-4668-a10a-66bce2950d4c_compact.jpg?v=1509598488"/>
                  </a>
                </li>
                <li className="pot-small-img">
                  <a className="d-block">
                    <img className="w-100" src="https://cdn.shopify.com/s/files/1/2508/8358/products/26_e5283375-8a77-4668-a10a-66bce2950d4c_compact.jpg?v=1509598488"/>
                  </a>
                </li>
              </ul>
              <div className="product-big-image">
                <div className="image-tab-content tab-content">
                  <div className="tab-pane fade in active">
                    <img className="w-100" src="https://cdn.shopify.com/s/files/1/2508/8358/products/26_e5283375-8a77-4668-a10a-66bce2950d4c_grande.jpg?v=1509598488"/>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md="4" sm="12" xs="12">
            <div className="product-detail-right">
              <div className="title">
                <h2>Wall Wacth</h2>
              </div>
              <div className="detail">
                <p>
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                </p>
              </div>
              <ul className="price">
                <li className="old">
                  <span>$120.00</span>
                </li>
                <li><span>$120.00</span></li>
              </ul>
              <div className="quantity">
                <div className="title">
                  <span>Quantity: </span>
                </div>
                <div className="cart-plus-minus">
                  <input className="cart-plus-minus-box" defaultValue="2" />
                  <div className="dec">-</div>
                  <div className="inc">+</div>
                </div>
              </div>
              <div>
                <a className="btn-buy-now">buy now</a>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md="12">
            <div className="title text-center"><h2>Best Product</h2></div>
          </Col>
          {/* <Product md="3" sm="6" xs="12" />
          <Product md="3" sm="6" xs="12" />
          <Product md="3" sm="6" xs="12" />
          <Product md="3" sm="6" xs="12" /> */}
        </Row>
      </Container>
    );
  };
};

export default ProductDetails;