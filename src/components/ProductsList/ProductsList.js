import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
  Input,
} from 'reactstrap';
// import {Link} from 'react-router-dom';

import PRODUCTS from '../../services/mockData/products';

import Product from '../Product';
import Breadcrum from '../Common/Breadcrum';


import './ProductsList.css';

class ProductsList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      products: []
    }
  }

  componentWillReceiveProps(nextProps) {
    this.getProductbyCategoryId(nextProps.match);
  }
  
  componentDidMount() {
    this.getProductbyCategoryId(this.props.match);
  }

  getProductbyCategoryId(match) {
    const matchNew = match.params.categoryId;
    const array = matchNew.split('-');
    const categoryId = array[array.length - 1];
    const products = PRODUCTS.filter((product) => product.category.id === categoryId);
    this.setState({products});
  }

  renderProducts(products) {
    if(!products.length) return;
    return products.map((product) =>
      <Product key={product.id} md="4" sm="6" xs="12" product={product} />
    )
  }

  render() {
    return(
      <Container className="product-list">
        <Row>
          <Col md="12" sm="12">
            <Breadcrum url={this.props.match.url}/>
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
            </div>
          </Col>
          <Col md="9" sm="12">
            <Row>
                <Col md="2">
                  <Input type="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </Col>
              </Row>
              <Row>
                  {
                    this.renderProducts(this.state.products)
                  }
              </Row>
          </Col>
          
        </Row>
      </Container>
    );
  }
}

const propTypes = {
  match: PropTypes.object.isRequired,
};

ProductsList.propTypes = propTypes;

export default ProductsList;
