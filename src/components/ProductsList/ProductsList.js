import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
  FormGroup, Input, Label
} from 'reactstrap';
import Product from '../Product';

import './ProductsList.css';

export const ProductsList = props => (
  <Container className="product-list">
    <Row>
      <Col md="12" sm="12">
        <ul className="breadcrum">
          <li>
            <a>Home</a>
          </li>
          <li>
            <span>Product list</span>
          </li>
        </ul>
      </Col>
      <Col md="3" sm="12">
        <div>
          <div className="shop-cart">
              <h4>Categories</h4>
              <ul className="side-list">
                <li>
                  <a>
                    Accessories
                    <span className="float-right">18</span>
                  </a>
                </li>
                <li>
                  <a>
                    Accessories
                    <span className="float-right">18</span>
                  </a>
                </li>
                <li>
                  <a>
                    Accessories
                    <span className="float-right">18</span>
                  </a>
                </li>
                <li>
                  <a>
                    Accessories
                    <span className="float-right">18</span>
                  </a>
                </li>
              </ul>
          </div>
          <div className="shop-cart">
              <h4>Categories</h4>
              <ul className="side-list">
                <li>
                  <a>
                    Accessories
                    <span className="float-right">18</span>
                  </a>
                </li>
                <li>
                  <a>
                    Accessories
                    <span className="float-right">18</span>
                  </a>
                </li>
                <li>
                  <a>
                    Accessories
                    <span className="float-right">18</span>
                  </a>
                </li>
                <li>
                  <a>
                    Accessories
                    <span className="float-right">18</span>
                  </a>
                </li>
              </ul>
          </div>
          <div className="shop-cart">
              <h4>Categories</h4>
              <ul className="side-list">
                <li>
                  <a>
                    Accessories
                    <span className="float-right">18</span>
                  </a>
                </li>
                <li>
                  <a>
                    Accessories
                    <span className="float-right">18</span>
                  </a>
                </li>
                <li>
                  <a>
                    Accessories
                    <span className="float-right">18</span>
                  </a>
                </li>
                <li>
                  <a>
                    Accessories
                    <span className="float-right">18</span>
                  </a>
                </li>
              </ul>
          </div>
        </div>
      </Col>
      <Col md="9" sm="12">
        <Row>
            <Col md="12">
              <div>Sort abc</div>
            </Col>
          </Row>
          <Row>
              <Product md="4" sm="6" xs="12" />
              <Product md="4" sm="6" xs="12" />
              <Product md="4" sm="6" xs="12" />
              <Product md="4" sm="6" xs="12" />
          </Row>
      </Col>
      
    </Row>
  </Container>
);

export default ProductsList;