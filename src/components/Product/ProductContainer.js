import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { addToCart, cartsSelectors } from '../../state/ducks/carts';

import Product from './Product';

import './Product.css';

class ProductContainer extends Component {

  async addTocart() {
    const sort = this.props.product.sort ? this.props.product.sort : (this.props.products && this.props.products.length + 1 );
    await this.props.addToCart(Object.assign(this.props.product, {
      quantity: 1,
      sort
    }));  
  }

  render() {
    const {product, ...rest} = this.props
    return(
      <Product
        product={product}
        {...rest}
        addToCart={this.addTocart.bind(this)}
      />
    );
  };
}

const propTypes = {
    product: PropTypes.object.isRequired,
    products: PropTypes.array.isRequired,
    addToCart: PropTypes.func.isRequired,
    md: PropTypes.string.isRequired,
    sm: PropTypes.string.isRequired,
    xs: PropTypes.string.isRequired,
};

ProductContainer.propTypes = propTypes;

export default connect(
    state => ({
        products: cartsSelectors.getCarts(state)
    }), {
      addToCart,
    },
)(ProductContainer);
