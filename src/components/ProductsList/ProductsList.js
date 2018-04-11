import React, {Component} from 'react';
import {
  Container,
  Row,
} from 'reactstrap';

import { connect } from 'react-redux';
import { getProducts, productsSelectors } from '../../state/ducks/products';

import Product from '../Product';

import './ProductsList.css';

class ProductsList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      products: [],
    }
  }
  
  async componentDidMount() {
    await this.getProduct();
  }
  
  async getProduct() {
    try {
      await this.props.getProducts();
      const products = this.props.products;
      this.setState({
        products
      });
    } catch (error) {
        console.log(error);
    }
  }

  renderProducts(products) {
    if(!products.length) return;
    return products.map(product =>
      <Product
        key={product.id}
        md="3"
        sm="6"
        xs="12"
        product={product}
      />
    )
  }

  render() {
    return(
      <Container className="product-list mb-5 mt-5">
        <Row>
          {
            this.renderProducts(this.state.products)
          }
        </Row>
      </Container>
    );
  }
}

export default connect(
  state => ({
      products: productsSelectors.getProducts(state),
      
  }), {
      getProducts,
  },
)(ProductsList);
