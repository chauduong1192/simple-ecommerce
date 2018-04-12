import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';

import { connect } from 'react-redux';
import {
  addToCart,
  openCart,
  cartsSelectors,
} from '../../state/ducks/carts';

import PRODUCTS from '../../services/mockData/products';
import Breadcrum from '../Common/Breadcrum';

import './ProductDetails.css';

const imageUrl = 'assets/images/products/';

class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {},
      selectedImage: '',
      quantity: 1,
      availableQuantity: 0,
    };

    this.addToCart = this.addToCart.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.getProductDetails(nextProps.match);
  }

  componentDidMount() {
    this.getProductDetails(this.props.match);
  }

  async addToCart(product) {
    try{ 
      await this.props.addToCart(Object.assign(product, {quantity: +this.state.quantity}));
    }catch(error) {
      console.log(error);
    }
  }

  getProductDetails(match) {
    const matchNew = match.params.productId;
    const array = matchNew.split('-');
    const productId = array[array.length - 1];
    PRODUCTS.filter((product) => {
      if(product.id === productId){
        this.setState({
          product,
          selectedImage : `${imageUrl}${product.images[0]}`,
        });
        return false;
      }
      return true;
    });
  }

  renderSmallImages(images) {
    if(!images.length) return;
    return images.map((image) =>
      <li
        key={image}
        className="pot-small-img"
        onMouseEnter={
          () => this.setState({selectedImage: `${imageUrl}${image}`})}>
        <a className="d-block">
          <img className="w-100" src={`${imageUrl}${image}`} alt='small'/>
        </a>
      </li>
    );
  }

  render() {
    const {product, selectedImage} = this.state;
    return(
      <Container className="product-details mb-5">
        <Row>
          <Col md="12">
            <Breadcrum url={this.props.match.params.productId}/>
          </Col>
          <Col md="8" sm="12" xs="12">
            <div className="d-flex product-detail-left">
              <ul className="product-small-image">
                { product.images &&
                  this.renderSmallImages(product.images)
                }
              </ul>
              <div className="product-big-image">
                <div className="image-tab-content tab-content">
                  <div className="tab-pane fade in active">
                    <img className="w-100" src={selectedImage} alt='big'/>
                    {product.availableQuantity === 0 && <div className="sold-out-tag">Sold out</div>}
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md="4" sm="12" xs="12">
            <div className="product-detail-right">
              <div className="title">
                <h2>{product.title}</h2>
              </div>
              <div className="detail">
                <p>{product.description}</p>
              </div>
              <ul className="price">
                <li className="old">
                  <span>{`$${product.oldPrice}`}</span>
                </li>
                <li><span>{`$${product.newPrice}`}</span></li>
              </ul>
              { product.availableQuantity > 0 &&
                <div>
                  <a onClick={() => this.addToCart(product)} className="btn-checkout">Add to cart</a>
                </div>
              }
            </div>
          </Col>
        </Row>
      </Container>
    );
  };
};

const propTypes = {
  match: PropTypes.object.isRequired,
  carts: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
  openCart: PropTypes.func.isRequired,
};
const defaultProps = {
  carts: []
}

ProductDetails.defaultProps = defaultProps;
ProductDetails.propTypes = propTypes;

export default connect(
  state => ({
      carts: cartsSelectors.getCarts(state),
      getQuantityById: cartsSelectors.getQuantityById(state),
  }), {
      addToCart,
      openCart
  },
)(ProductDetails);
