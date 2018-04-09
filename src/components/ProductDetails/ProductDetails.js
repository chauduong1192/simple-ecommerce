import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
  Input
} from 'reactstrap';

import { connect } from 'react-redux';
import { addToCart, cartsSelectors } from '../../state/ducks/carts';

import PRODUCTS from '../../services/mockData/products';

import './ProductDetails.css';

const imageUrl = 'assets/images/products/';

class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {},
      selectedImage: '',
      quantity: 1,
      availableQuantity: 0
    };

    this.onChange = this.onChange.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.getProductDetails(nextProps.match);
  }

  componentDidMount() {
    this.getProductDetails(this.props.match);
  }

  onChange(e) {
    this.setState({ quantity: e.target.value });
  }

  async addToCart(product) {
    if (+this.state.quantity > +product.availableQuantity) return;
    try{ 
      await this.props.addToCart(Object.assign(product, {quantity: this.state.quantity}));
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
          selectedImage : `${imageUrl}${product.images[0]}`
        });
        return;
      }
    });
  }

  renderOption(quantity) {
    let items = [];
    for(let i = 1; i <= quantity; i++) {
      items = [...items, <option key={i} value={i}>{i}</option>]
    }
    return items;
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
      <Container className="product-details">
        <Row>
          <Col md="12" sm="12">
            {/* Breadrum */}
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
              <div className="quantity">
                <div className="title">
                  <span>Quantity: </span>
                </div>
                <div className="cart-plus-minus">
                  {/* <input type="number" min="1" max={product.availableQuantity || 1} className="cart-plus-minus-box" value={this.state.quantity} onChange={this.onChange} required/>
                  <div onClick={this.decQuantity} className="dec">-</div>
                  <div onClick={() => this.incQuantity(product)} className="inc">+</div> */}
                  <Input
                    className="select-quantity"
                    type="select"
                    name="quantity"
                    id="quantity"
                    onChange={this.onChange}
                    value={this.state.quantity}
                  >
                    {
                      this.renderOption(product.availableQuantity)
                    } 
                  </Input>
                </div>
              </div>
              <div>
                <a onClick={() => this.addToCart(product)} className="btn-checkout">Add to cart</a>
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

const propTypes = {
  match: PropTypes.object.isRequired,
  carts: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
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
  },
)(ProductDetails);